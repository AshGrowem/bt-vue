───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// DO-LIST
Optimizations
• Nodemon -> https://github.com/pigcan/extra-watch-webpack-plugin
• SCSS -> SASS
• JS -> TS
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <main class="App">
    <GlobalEvents
      :filter="event => event.target.tagName !== 'INPUT' && 'TEXTAREA'"
      @keydown.digit1="activeTab = 0"
      @keydown.digit2="activeTab = 1"
      @keydown.digit3="activeTab = 2"
      @keydown.digit4="activeTab = 3"
    />
    <TheHeader
      :active-tab="activeTab"
      @changeActiveTab="activeTab = $event"
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
      rowData: null,
      activeTab: 0,
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
          return '<div class="mdc-form-field"> <div class="mdc-checkbox"> <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1"/> <div class="mdc-checkbox__background"> <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"> <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/> </svg> <div class="mdc-checkbox__mixedmark"></div> </div> </div> <label for="checkbox-1"></label> </div>'
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
  created() {
    fetch('/rowData')
      .then(response => response.json())
      .then(json => (this.rowData = json))
  },
  methods: {
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
