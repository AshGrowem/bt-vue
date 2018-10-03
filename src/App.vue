───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <main class="App"> 
    <!-- 49 = digit1, 50 = digit2 -->
    <!-- test -->
    <GlobalEvents
      :filter="event => event.target.tagName !== 'INPUT' && 'TEXTAREA'"
      @keydown.digit1="changeActiveTab(1)"
      @keydown.digit2="changeActiveTab(2)"
      @keydown.digit3="changeActiveTab(3)"
      @keydown.digit4="changeActiveTab(4)"
    />
    <TheHeader :active-tab="activeTab" />
    <AgGridTracker :row-data="rowData" />
  </main>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import GlobalEvents from 'vue-global-events'
import AgGridTracker from './components/AgGridTracker.vue'
import TheHeader from './components/TheHeader'

export default {
  name: 'App',
  components: {
    GlobalEvents,
    AgGridTracker,
    TheHeader,
  },
  data() {
    return {
      rowData: null,
      activeTab: 1,
    }
  },
  created() {
    fetch('/rowData')
      .then(response => response.json())
      .then(json => (this.rowData = json))
  },
  methods: {
    test() {
      alert('test')
    },
    changeActiveTab(tabIndex) {
      this.activeTab = tabIndex
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import 'sass/_global';
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────