───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <mdc-top-app-bar
    title="bt-vue"
    event="nav"
  >
    <v-tabs
      slider-color="black"
    >
      <v-tab class="text-none">
        Tracker
      </v-tab>
      <v-tab class="text-none">
        HODLings
      </v-tab>
      <v-tab class="text-none">
        Settings
      </v-tab>
    </v-tabs>
    <v-switch
      label="Compact"
    />
    <icon-toggle
      iconone="fullscreen"
      icontwo="fullscreen_exit"
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
    <test />
  </mdc-top-app-bar>
</template>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
// import VueMDCTypography from 'vue-mdc-adapter/dist/typography'
// import VueMDCTabs from 'vue-mdc-adapter/dist/tabs'
import IconToggle from './IconToggle'
import Test from './Test'
// import VueMDCTopAppBar from '../../vue-mdc-adapter/components/top-app-bar' // Patches this Issue https://github.com/stasson/vue-mdc-adapter/dist/issues/529
// import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    IconToggle,
    Test,
  },
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
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

@import '~@material/button/mdc-button';
@import '~@material/snackbar/mdc-snackbar';
@import '~@material/top-app-bar/mdc-top-app-bar';
@import '~@material/tabs/mdc-tabs';

.mdc-top-app-bar {
  @include mdc-top-app-bar-fill-color($app-background-color);
  position: initial; // Fix Ag-Grid getting overlapped
  font-size: $phi1;
  color: black;
}

.mdc-top-app-bar__title {
  font-size: $phi1;
  font-weight: 400;
  line-height: 48px;
}

.mdc-tab-bar {
  margin-left: 0vw;
  // box-shadow: 0px 10px 31px 0px rgba(0, 0, 0, 0.2);
}

.v-tab {
  font-size: $phi0;
  font-family: $app-font-family;
  color: black;
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
