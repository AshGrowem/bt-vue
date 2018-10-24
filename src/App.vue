───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// TODO
• Typescript integration
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
      @changedActiveTab="activeTab = $event"
    />
    <component
      :is="activeTabComponent"
      :row-data="rowData"
      :numeric-font-weight="numericFontWeight"
      :numeric-font="numericFont"
    />
  </main>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import GlobalEvents from 'vue-global-events'
import Tracker from './components/grids/Tracker.vue'
import HODLings from './components/grids/HODLings.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    GlobalEvents,
    Tracker,
    HODLings,
    TheHeader,
  },
  data() {
    return {
      rowData: null,
      activeTab: 0,
      numericFont: 'Titillium Web',
      numericFontWeight: 100,
    }
  },
  computed: {
    activeTabComponent() {
      return ['Tracker', 'HODLings', 'Rebalancer', 'Settings'][this.activeTab]
    },
  },
  created() {
    fetch('/rowData')
      .then(response => response.json())
      .then(json => (this.rowData = json))
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
