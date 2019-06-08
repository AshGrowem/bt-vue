───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <v-toolbar>
    <v-tabs
      v-model="model" 
      slider-color="black"
      centered
    >
      <v-tab
        ref="tab-1"
        @click="$emit('clicked-tab-1')"
      >
        TRACKER
      </v-tab>
      <v-tab
        ref="tab-2"
        @click="$emit('clicked-tab-2')"
      >
        HODLings
      </v-tab>
      <v-tab
        ref="tab-3"
        @click="$emit('clicked-tab-3')"
      >
        REBALANCER
      </v-tab>
      <v-tab
        ref="tab-4"
        @click="$emit('clicked-tab-4')"
      >
        SETTINGS
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import IconToggle from './IconToggle'
// import Test from './Test'
// import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  props: {
    activeTab: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      model: 'tab-3',
    }
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import '../sass/app';
@import '../sass/pow';
@import '../sass/phi';

.v-tab {
  font-size: $phi0 !important;
  font-family: $app-font-family;
  color: black !important;
  font-weight: 300 !important;
}

.v-tab--active {
  text-shadow: -0.3px -0.3px 0 black, 0.3px -0.3px 0 black, -0.3px 0.3px 0 black, 0.3px 0.3px 0 black;
}

.v-tab:hover:not(.v-tab--active) {
  text-shadow: -0.3px -0.3px 0 black, 0.3px -0.3px 0 black, -0.3px 0.3px 0 black, 0.3px 0.3px 0 black;
}

.v-toolbar {
  box-shadow: none !important;
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
