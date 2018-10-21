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
    <transition
      name="component-fade"
      mode="out-in"
    >
      <component
        :is="activeTabComponent"
        :row-data="rowData"
      />
    </transition>
  </main>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import GlobalEvents from 'vue-global-events'
import Tracker from './components/Tracker.vue'
import HODLings from './components/HODLings.vue'
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
@import 'components/sass/app';

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.08s ease-out;
  .ag-root-wrapper-body {
    transition: opacity 0.08s ease-out;
  }
}
.component-fade-enter,
.component-fade-leave-to {
  .ag-root-wrapper-body {
    opacity: 0;
  }
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
