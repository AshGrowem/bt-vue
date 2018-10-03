// —————————————————————————————————— * NOTES * —————————————————————————————————— //
// region
/*

// TODO
  • replace `forEach` with `map`
  • .toFixed() back to numbers
  • 'max_supply' smart fill-in from CryptoCompare
  • util.promisify https://nodejs.org/dist/latest-v9.x/docs/api/util.html#util_util_promisify_original
  • CMK Currency Conversions https://coinmarketcap.com/api/
Optimization
  • Benchmark `Buffer.concat(body).toString()` vs `JSON.parse(body.join('')))`
  • Convert to streams?

 */
// endregion

const https = require('https')
const fs = require('fs')

// Reorder & Rename properties
// Define new properties for our eventual rowData.json that don't already exist in CoinMarketCap's API repsonse
function buildRowDataJSON(CMKticker, CMKglobal) {
  return new Promise((resolve, reject) => {
    let arrOfObj = []
    CMKticker.data.forEach(item => {
      Object.defineProperty(item, 'market_share', {
        value: (
          (item.quotes.USD['market_cap'] / CMKglobal.data.quotes.USD['total_market_cap']) *
          100
        ).toFixed(2),
        configurable: true,
        enumerable: true,
        writable: true,
      })
      Object.defineProperty(item, 'growth_@1%_market_share', {
        value: Math.round(1 / item['market_share']),
        configurable: true,
        enumerable: true,
        writable: true,
      })
      // Define elements based on CMKticker
      // prettier-ignore
      arrOfObj.push({
        '#'                      : item['rank'],
        'Name'                   : item['name'],
        'Symbol'                 : item['symbol'],
        'Market Cap'             : item.quotes.USD['market_cap'],
        'Market Share'           : item['market_share'],
        'Price'                  : item.quotes.USD['price'],
        'Volume 24h'             : item.quotes.USD['volume_24h'],
        '1h'                     : item.quotes.USD['percent_change_1h'],
        '24h'                    : item.quotes.USD['percent_change_24h'],
        '7d'                     : item.quotes.USD['percent_change_7d'],
        'Circulating'            : item['circulating_supply'],
        'Supply'                 : item['total_supply'],
        'Max Supply'             : item['max_supply'],
        'CoinMarketCap URL'      : item['website_slug'],
      })
    })
    // Format CoinMarketCap URL's
    arrOfObj.forEach(item => {
      let coinMarketCapURL = item['CoinMarketCap URL'].split(' ').join('-')
      item['CoinMarketCap URL'] = `https://coinmarketcap.com/currencies/${coinMarketCapURL}/`
    })
    // Strings to numbers
    // prettier-ignore
    arrOfObj.forEach(item => {
      const intArr = [
        'Market Cap',
      ]
      // prettier-ignore
      const floatArr = [
        'Market Share',
        'Price',
      ]
      intArr.forEach(item2 => { item[item2] = parseInt(item[item2], 10) })
      // 'PRICE' COLUMN SMART DECIMALS
      // Ensure Price column shows 6 decimals for coin prices < $1 and 2 decimals for prices > $1
      // The majority of cryptos are priced below $1 so we will evaluate those first
      if (item['Price'] <= 1) {
        item['Price'] = item['Price'].toFixed(6)
      } else {
        item['Price'] = item['Price'].toFixed(2)
      }
      floatArr.forEach(item2 => { item[item2] = parseFloat(item[item2]) })
      
      // FORMATTING
      // Format Final Cell Values directly in final `rowData.json` file
      // (Use in post Render Logic if possible or may break sorting)
      // item['Market Share'] += '%'
      // item['Growth @1% Market Share'] += 'x'
      // item['1h'] += '%'
      // item['24h'] += '%'
      // item['7d'] += '%'
    })

    const filePath = 'src/rowData.json'
    // let template = {
    //   api: null
    // }
    let template = {
      rowData: arrOfObj,
      // prettier-ignore
      global: {
        'BTC Dominance'    : CMKglobal.data.bitcoin_percentage_of_market_cap,
        'Cryptos'          : CMKglobal.data.active_cryptocurrencies,
        'Global Market Cap': CMKglobal.data.quotes.total_market_cap,
        'Global Volume 24h': CMKglobal.data.quotes.total_volume_24h,
        'Last Updated'     : CMKglobal.data.last_updated,
        'Markets'          : CMKglobal.data.active_markets
      }
    }

    // prettier-ignore
    let ISOtime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().substr(0, 19).replace('T', ' ')
    fs.writeFile(filePath, JSON.stringify(template), err => {
      if (err) throw err
      console.info(`${filePath} saved! ——— ${ISOtime} \n`)
    })
  }).catch(error => {
    console.error('buildRowDataJSON() promise rejected!')
    console.error(error + '\n')
  })
}

function getHttps(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        if (res.statusCode < 200 || res.statusCode > 299) {
          reject(new Error(`Failed to load ${res.url}, status code: ${res.statusCode}`))
        }
        let body = []
        res.on('data', chunk => body.push(chunk))
        res.on('end', () => resolve(JSON.parse(body.join(''))))
      })
      .on('error', e => reject(e))
  }).catch(e => {
    console.error('getHttps() promise rejected!')
    console.error(e + '\n')
  })
}

async function doAsyncOps() {
  let CMKticker = await getHttps(
    'https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank&structure=array',
  )
  let CMKglobal = await getHttps('https://api.coinmarketcap.com/v2/global/')
  await buildRowDataJSON(CMKticker, CMKglobal)
}
doAsyncOps()

// setInterval(doAsyncOps, 300000)
// 300000 ms = 5 minutes
// CMK API Limit is every 2 seconds. https://coinmarketcap.com/api/
// CMK API Updates every 5 minutes. https://coinmarketcap.com/api/
