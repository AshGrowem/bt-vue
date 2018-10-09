───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <mdc-top-app-bar
    title="BitTracker"
    event="nav"
  >
    <mdc-tab-bar @change="$emit('changedActiveTab', $event)">
      <mdc-tab :active="activeTabs[0]">TRACKER</mdc-tab>
      <mdc-tab :active="activeTabs[1]">HODLings</mdc-tab>
      <mdc-tab :active="activeTabs[2]">REBALANCER</mdc-tab>
      <mdc-tab :active="activeTabs[3]">SETTINGS</mdc-tab>
    </mdc-tab-bar>
    <mdc-switch
      label="Compact"
    />
    <mdc-icon-toggle
      toggle-on="fullscreen"
      toggle-off="fullscreen_exit"
    />
  </mdc-top-app-bar>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import VueMDCTypography from 'vue-mdc-adapter/typography'
import VueMDCSwitch from 'vue-mdc-adapter/switch'
import VueMDCTopAppBar from '/code/vue-mdc-adapter/components/top-app-bar' // Patches this Issue https://github.com/stasson/vue-mdc-adapter/issues/529
import VueMDCTabs from 'vue-mdc-adapter/tabs'
// import { mapState } from 'vuex'

this

export default {
  name: 'TheHeader',
  mixins: [VueMDCTypography, VueMDCTopAppBar, VueMDCTabs, VueMDCSwitch],
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      text: '',
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
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import 'sass/app';
@import 'sass/pow';
@import 'sass/phi';
@import '~@material/button/mdc-button';
@import '~@material/top-app-bar/mdc-top-app-bar';
@import '~@material/tabs/mdc-tabs';
// @import '~@material/icon-toggle/mdc-icon-toggle';
@import '~@material/switch/mdc-switch';

// @include mdc-checkbox-ink-color(white);
// @include mdc-tab-bar-indicator-ink-color(red);

.mdc-top-app-bar {
  @include mdc-top-app-bar-fill-color($app-background-color);
  position: initial; // Fix Ag-Grid getting overlapped
  font-size: phi-px(1);
  color: black;
}

// .mdc-top-app-bar__section {
//   flex: initial;
// }

.mdc-top-app-bar__title {
  font-size: phi-px(1);
  font-weight: 400;
  line-height: 48px;
}

.mdc-tab-bar {
  margin-left: 0vw;
  // box-shadow: 0px 10px 31px 0px rgba(0, 0, 0, 0.2);
}

.mdc-tab {
  font-size: 16px;
  text-transform: initial;
  font-weight: 300;
  text-decoration-color: black;
  color: black;
}

.mdc-tab--active {
  text-shadow: -0.6px -0.6px 0 black, 0.6px -0.6px 0 black, -0.6px 0.6px 0 black, 0.6px 0.6px 0 black;
  transition: 0.314s;
}

.mdc-tab:hover:not(.mdc-tab--active) {
  text-shadow: -0.6px -0.6px 0 black, 0.6px -0.6px 0 black, -0.6px 0.6px 0 black, 0.6px 0.6px 0 black;
  transition: 0.314s;
}

.mdc-icon-button {
  background: inherit;
  border: none;
  outline: none;
}

.mdc-switch-label {
  font-size: phi-px(0);
  font-weight: 100;
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
