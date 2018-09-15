───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <header>
    <mdc-top-app-bar 
      title="Title2" 
      event="nav">
      <mdc-tab-bar 
        slot="tabs" 
        @change="onSelected">
        <mdc-tab>Tracker</mdc-tab>
        <mdc-tab>HODLings</mdc-tab>
        <mdc-tab>Rebalancer</mdc-tab>
        <mdc-tab>Settings</mdc-tab>
      </mdc-tab-bar>
    </mdc-top-app-bar>
  </header>
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import Vue from 'vue'
import VueMDCTypography from 'vue-mdc-adapter/typography'
import VueMDCTopAppBar from '/code/vue-mdc-adapter/components/top-app-bar' // Patches this Issue https://github.com/stasson/vue-mdc-adapter/issues/529
import VueMDCTabs from 'vue-mdc-adapter/tabs'

export default {
  name: 'TheHeader',
  mixins: [VueMDCTypography, VueMDCTopAppBar, VueMDCTabs],
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  data: function() {
    return {
      text: '',
    }
  },
  methods: {
    theAction: function() {
      alert('boop!')
      console.info(this.theAction)
    },
    showHelp: function() {
      console.log('show help')
    },
    onSelected: function(idx) {
      // console.log(`selected index: ${idx}`)
    },
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
