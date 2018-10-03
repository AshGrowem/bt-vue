───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <mdc-top-app-bar
    title="Title2"
    event="nav"
  >
    <mdc-tab-bar
      slot="tabs"
    >
      <mdc-tab :active="activeTabMap[1]">Tracker</mdc-tab>
      <mdc-tab :active="activeTabMap[2]">HODLings</mdc-tab>
      <mdc-tab :active="activeTabMap[3]">Rebalancer</mdc-tab>
      <mdc-tab :active="activeTabMap[4]">Settings</mdc-tab>
    </mdc-tab-bar>
  </mdc-top-app-bar>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import VueMDCTypography from 'vue-mdc-adapter/typography'
import VueMDCTopAppBar from '/code/vue-mdc-adapter/components/top-app-bar' // Patches this Issue https://github.com/stasson/vue-mdc-adapter/issues/529
import VueMDCTabs from 'vue-mdc-adapter/tabs'
// import { mapState } from 'vuex'

export default {
  name: 'TheHeader',
  mixins: [VueMDCTypography, VueMDCTopAppBar, VueMDCTabs],
  props: {
    activeTab: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      text: '',
      activeTabMap: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    }
  },
  watch: {
    activeTab(newTabIndex) {
      function getActiveTabMap() {
        switch (newTabIndex) {
          case 1:
            return {
              1: true,
              2: false,
              3: false,
              4: false,
            }
          case 2:
            return {
              1: false,
              2: true,
              3: false,
              4: false,
            }
          case 3:
            return {
              1: false,
              2: false,
              3: true,
              4: false,
            }
          case 4:
            return {
              1: false,
              2: false,
              3: false,
              4: true,
            }
          default:
            return {
              1: false,
              2: false,
              3: false,
              4: false,
            }
        }
      }
      this.activeTabMap = getActiveTabMap(newTabIndex)
    },
  },
  methods: {
    // setActiveTab(event) {
    //   // event.target
    // },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
// FIXME mdc-tab activeTab starts out not bolded

@import '../sass/_global';
@import '~vue-mdc-adapter/dist/styles';
@import '~@material/button/mdc-button';
@import '~@material/top-app-bar/mdc-top-app-bar';
@import '~@material/tabs/mdc-tabs';
@import '~@material/icon-toggle/mdc-icon-toggle';

// @include mdc-checkbox-ink-color(white);
// @include mdc-tab-bar-indicator-ink-color(red);

.mdc-top-app-bar {
  @include mdc-top-app-bar-fill-color($website-background-color);
}

// Fix Ag-Grid getting overlapped
.mdc-top-app-bar {
  position: initial !important;
}

.mdc-tab-bar {
  margin-left: 12vw;

  // box-shadow: 0px 10px 31px 0px rgba(0, 0, 0, 0.2);
}

.mdc-tab {
  font-size: 16px;
  font-weight: 300;
  text-decoration-color: black;
  color: black;
}

.mdc-tab--active {
  text-shadow: -0.6px -0.6px 0 black, 0.6px -0.6px 0 black, -0.6px 0.6px 0 black, 0.6px 0.6px 0 black;
  transition: 0.314s ease-in;
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
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
