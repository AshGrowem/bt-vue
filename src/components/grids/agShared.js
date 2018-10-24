
export const agShared = { // eslint-disable-line
  get BCP47LanguageTag() {
    return window.navigator.language || window.navigator.userLanguage
  },
  rightAlignedCellStyle: {
    'text-align': 'right',
    'line-height': '36px',
  },
  rightAlignedCellStyleCompact: {
    'text-align': 'right',
  },
  fetchAndSetRows: async (url, params) => {
    let response = await fetch(url)
    let rowData = await response.json()
    await mutateAndSet(rowData)
    function mutateAndSet(rowData) {
      return new Promise(() => {
        let fieldArr = Object.keys(rowData[0])
        rowData.forEach(item => {
          item.Updated = agShared.calcMinsAgo(item.Updated)
        })
        params.api.setRowData(rowData)
        params.columnApi.autoSizeColumns(fieldArr)
      })
    }
  },
  calcMinsAgo: timeThen => {
    // Measuring in seconds
    let timeNow = Date.now() / 1000
    let difference = timeNow - timeThen
    let numOfMins = difference / 60
    let numOfSecs_Rounded = difference.toFixed(0)
    let numOfMins_Rounded = (difference / 60).toFixed(0)
    let output = numOfMins_Rounded + ' mins ago'

    if (numOfMins < 1) {
      output = numOfSecs_Rounded + ' secs ago'
    }

    if (numOfMins_Rounded === '1') {
      output = '1 min ago'
    }

    return output
  },
  cellRenderer: {
    nativeCheckbox: params => {
      return '<input type="checkbox"/>'
    },
    checkbox: params => {
      return '<mwc-formfield><mwc-checkbox></mwc-checkbox></mwc-formfield>'
    },
    mdc_checkbox: params => {
      return '<div class="mdc-form-field"> <div class="mdc-checkbox"> <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/> <div class="mdc-checkbox__background"> <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"> <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/> </svg> <div class="mdc-checkbox__mixedmark"></div> </div> </div> <label for="checkbox-1"></label> </div>'
    },
    starred: params => {
      return '<input type="checkbox">'
    },
    textfield: params => {
      return '<mwc-textfield></mwc-textfield>'
    },
  },
  get getNativeCheckbox() {
    return this.cellRenderer.nativeCheckbox
  },
  cellRendererSelector: params => {
    switch (params.data.type) {
      case 'Checkbox':
        return {
          component: 'Checkbox',
        }
      case 'TextField':
        return {
          component: 'TextField',
        }
      case 'Slider':
        return {
          component: 'Slider',
        }
      default:
        return null
    }
  },
  comparator: {
    ignoreCase: (a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    },
    ignorePercent: (a, b) => {
      return a.replace('%', '') - b.replace('%', '')
    },
  },
  numbersFont: 'Titillium Web',
  numbersFontWeight: '100',
  valueFormatter: {
    currency: params => {
      return params.value.toLocaleString(agShared.BCP47LanguageTag, {
        style: 'currency',
        currency: 'USD',
      })
    },
    percentage: params => {
      return params.value + '%'
    },
  },
}
