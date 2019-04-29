───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <v-toolbar>
    <v-tabs-items
      v-model="model"
      slider-color="black"
    >
      <v-tab-item
        id="tracker-tab"
        class="text-none"
      >
        TRACKER
      </v-tab-item>
      <v-tab-item
        id="hodlings-tab"
        class="text-none"
      >
        HODLings
      </v-tab-item>
      <v-tab-item
        id="rebalancer-tab"
        class="text-none"
      >
        REBALANCER
      </v-tab-item>
      <v-tab-item
        id="settings-tab"
        class="text-none"
      >
        SETTINGS
      </v-tab-item>
    </v-tabs-items>
    <v-switch
      label="Compact"
    />
    <icon-toggle
      iconone="fullscreen"
      icontwo="fullscreen_exit"
    />
  </v-toolbar>
</template>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import IconToggle from './IconToggle'
// import Test from './Test'
// import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    IconToggle,
  },
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      model: 'tab-2',
      snackbar: false,
    }
  },
  computed: {
    activeTabs() {
      return [
        [true, false, false, false],
        [false, true, false, false],
        [false, false, true, false],
        [false, false, false, true],
      ][this.activeTab]
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.snackbar = true
      }, 2000)
    })
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import '../sass/app';
@import '../sass/pow';
@import '../sass/phi';

.v-tab {
  font-size: $phi0;
  font-family: $app-font-family;
  color: black !important;
  font-weight: 300;
}

.v-tab--active {
  text-shadow: -0.6px -0.6px 0 black, 0.6px -0.6px 0 black, -0.6px 0.6px 0 black, 0.6px 0.6px 0 black;
  transition: 0.314s ease-out;
}

.v-tab:hover:not(.v-tab--active) {
  text-shadow: -0.6px -0.6px 0 black, 0.6px -0.6px 0 black, -0.6px 0.6px 0 black, 0.6px 0.6px 0 black;
  transition: 0.314s;
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
