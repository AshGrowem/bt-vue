───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// DO-LIST
Optimizations
• Nodemon -> https://github.com/pigcan/extra-watch-webpack-plugin
• SCSS -> SASS
• JS -> TS
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <main
    class="App"
  >
    <GlobalEvents
      :filter="event => event.target.tagName !== 'INPUT' && 'TEXTAREA'"
      @keydown.digit1="onDigit1"
      @keydown.digit2="onDigit2"
      @keydown.digit3="onDigit3"
      @keydown.digit4="onDigit4"
    />
    <TheHeader
      :active-tab="activeTab"
      :active-tab-class-map="activeTabClassMap"
      @change-tab-0="activeTab = 0"
      @change-tab-1="activeTab = 1"
      @change-tab-2="activeTab = 2"
      @change-tab-3="activeTab = 3"
    />
    <Component
      :is="activeTabComponent"
      :row-data="rowData"
      :numeric-font-weight="numericFontWeight"
      :numeric-font="numericFont"
      :last-updated="lastUpdated"
      :right-aligned-cell-style="rightAlignedCellStyle"
      :value-formatter="valueFormatter"
      :comparator="comparator"
    />
    <v-snackbar
      v-model="snackbar"
      :timeout="0"
    >
      Try using keys 1, 2, 3 & 4 to switch tabs!
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </main>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import GlobalEvents from 'vue-global-events'
import TheHeader from './components/TheHeader.vue'
import Tracker from './components/grids/Tracker.vue'
import HODLings from './components/grids/HODLings.vue'
import Rebalancer from './components/grids/Rebalancer.vue'
import Settings from './components/grids/Settings.vue'
import rowDataLocal from './rowData'

export default {
  name: 'App',
  components: {
    GlobalEvents,
    TheHeader,
    Tracker,
    HODLings,
    Rebalancer,
    Settings,
  },
  data() {
    return {
      snackbar: false,
      rowData: null,
      activeTab: 0,
      activeTabClassMap: {
        0: null,
        1: null,
        2: null,
        3: null,
      },
      numericFont: 'Titillium Web',
      numericFontWeight: 100,
      rightAlignedCellStyle: {
        'text-align': 'right',
        'line-height': '36px',
      },
      rightAlignedCellStyleCompact: {
        'text-align': 'right',
      },
    }
  },
  computed: {
    activeTabComponent() {
      return ['Tracker', 'HODLings', 'Rebalancer', 'Settings'][this.activeTab]
    },
    language() {
      return navigator.language || navigator.userLanguage
    },
    comparator: () => {
      return {
        ignoreCase: (a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase())
        },
        ignorePercent: (a, b) => {
          return a.replace('%', '') - b.replace('%', '')
        },
      }
    },
    cellRenderer: () => {
      return {
        checkbox: params => {
          return '<mwc-formfield><mwc-checkbox></mwc-checkbox></mwc-formfield>'
        },
        mdc_checkbox: params => {
          return ''
        },
        nativeCheckbox: params => {
          return '<input type="checkbox"/>'
        },
        starred: params => {
          return '<input type="checkbox">'
        },
        textfield: params => {
          return '<mwc-textfield></mwc-textfield>'
        },
      }
    },
    cellRendererSelector: () => {
      return params => {
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
      }
    },
    valueFormatter() {
      return {
        currency: params => {
          return params.value.toLocaleString(this.language, {
            style: 'currency',
            currency: 'USD',
          })
        },
        percentage: params => {
          return params.value + '%'
        },
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.snackbar = true
      }, 2000)
    })
  },
  beforeCreate() {
    const getRowDataLocal = async () => {
      this.rowData = await rowDataLocal
    }
    getRowDataLocal()
  },
  methods: {
    test() {
      alert('test')
      console.log('test')
    },
    changeTab(event) {
      console.log(event)
      this.activeTab = event.payload[0]
    },
    lastUpdated: timeThen => {
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
      return output
    },
    onDigit1() {
      this.activeTab = 0
      this.activeTabClassMap = {
        0: true,
        1: false,
        2: false,
        3: false,
      }
    },
    onDigit2() {
      this.activeTab = 1
      this.activeTabClassMap = {
        0: false,
        1: true,
        2: false,
        3: false,
      }
    },
    onDigit3() {
      this.activeTab = 2
      this.activeTabClassMap = {
        0: false,
        1: false,
        2: true,
        3: false,
      }
    },
    onDigit4() {
      this.activeTab = 3
      this.activeTabClassMap = {
        0: false,
        1: false,
        2: false,
        3: true,
      }
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
// @import url('https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/');
// @import url('https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/8.0.0/sanitize.min.css');
// @import url('https://fonts.googleapis.com/css?family=Exo+2:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900|Material+Icons');
// @import '~vuetify/dist/vuetify.min.css';
// @import '~vuetify/src/styles/main.sass';
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
