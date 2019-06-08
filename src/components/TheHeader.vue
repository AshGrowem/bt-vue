───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <v-toolbar>
    <v-tabs
      v-model="model" 
      slider-color="black"
      centered
    >
      <v-tab
        :class="{ 'v-tab--active': activeTabClassMap[0] }"
        @click="$emit('change-tab-0')"
      >
        TRACKER
      </v-tab>
      <v-tab
        :class="{ 'v-tab--active': activeTabClassMap[1] }"
        @click="$emit('change-tab-1')"
      >
        HODLings
      </v-tab>
      <v-tab
        :class="{ 'v-tab--active': activeTabClassMap[2] }"
        @click="$emit('change-tab-2')"
      >
        REBALANCER
      </v-tab>
      <v-tab
        :class="{ 'v-tab--active': activeTabClassMap[3] }"
        @click="$emit('change-tab-3')"
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
  components: {
    // Test,
    IconToggle,
  },
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
    activeTabClassMap: {
      type: Object,
      default: function() {
        return {
          0: null,
          1: null,
          2: null,
          3: null,
        }
      },
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
  font-size: $phi0 !important;
  font-family: $app-font-family;
  color: black !important;
  font-weight: 300 !important;
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
