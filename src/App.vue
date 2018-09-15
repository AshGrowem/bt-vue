───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <main class="App"> 
    <!-- 49 = digit1, 50 = digit2 -->
    <GlobalEvents
      :filter="event => event.target.tagName !== 'INPUT' && 'TEXTAREA'"
      @keydown.49="changeActiveTab(1)"
      @keydown.50="test"
    />
    <TheHeader :active-tab="activeTab"/>
    <AgGridTracker :row-data="rowData"/>
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
  data: function() {
    return {
      rowData: null,
      activeTab: 0,
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
      this.$set(this.activeTab, )
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import 'sass/_global';
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────