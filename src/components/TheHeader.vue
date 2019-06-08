───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <v-toolbar>
    <v-tabs
      v-model="model" 
      slider-color="black"
      centered
    >
      <v-tab @click="$emit('change-tab-0')">
        TRACKER
      </v-tab>
      <v-tab @click="$emit('change-tab-1')">
        HODLings
      </v-tab>
      <v-tab @click="$emit('change-tab-2')">
        REBALANCER
      </v-tab>
      <v-tab @click="$emit('change-tab-3')">
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
  components: {
    // Test,
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

.v-toolbar {
  box-shadow: none !important;
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
