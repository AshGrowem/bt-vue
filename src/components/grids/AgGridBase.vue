// TODO px => rems
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <AgGridVue />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import 'ag-grid-enterprise'
import { AgGridVue } from 'ag-grid-vue'
import { log } from 'util'

export default {
  name: 'Tracker',
  components: {
    AgGridVue,
  },
  props: {
    numericFont: {
      type: String,
      default: 'Titillium Web',
    },
    numericFontWeight: {
      type: Number,
      default: 100,
    },
    lastUpdated: {
      type: Function,
      required: true,
    },
    rightAlignedCellStyle: {
      type: Object,
      required: true,
    },
    valueFormatter: {
      type: Object,
      required: true,
    },
    comparator: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      gridReady: false,
      defaultColDef: {
        editable: true,
        resizable: true,
        filter: true,
        sortable: true,
        classes: [],
        cellStyle: {
          'text-align': 'right',
          'line-height': '36px',
          'font-family': this.numericFont,
          'font-weight': this.numericFontWeight,
        },
      },
    }
  },
  computed: {
    classObject() {
      return {
        'ag-grid': true,
        'ag-theme-balham': true,
        'grid-ready': this.gridReady,
      }
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
:root {
  --ag-grid-height: 88vh;
}

@import '../../sass/app';
@import '../../sass/pow';
@import '../../sass/phi'; // file:///code/bt-vue/src/sass/_phi.scss

@import '~ag-grid-community/src/styles/ag-grid.scss';
@import '~ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss';

// Import-Dependent
@mixin rightAlignColumnHeaders($col-ids...) {
  $col-id-arr: $col-ids;

  @each $col-id in $col-id-arr {
    .ag-header-cell[col-id='#{$col-id}'] > .ag-cell-label-container {
      display: flex;
      flex-direction: row;
    }

    .ag-header-cell[col-id='#{$col-id}'] > .ag-cell-label-container > .ag-header-cell-label {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}

@include rightAlignColumnHeaders(
  '#',
  'Market Cap',
  'Market Share',
  'Price',
  'Volume 24h',
  '1h',
  '24h',
  '7d',
  'Circulating',
  'Supply',
  'Max Supply',
  'Growth @1% Market Share'
);

// Remove focus outline
div[tabindex='-1']:focus {
  outline: 0;
}

.ag-grid {
  height: var(--ag-grid-height);
  width: auto;
  padding: $phi2;
  padding-top: $phi2;
  transition: 0.5s all $easeInOutQuart;
}

.fullscreen {
  height: 86.5vh;
  padding: 0;
}

.ag-grid .ag-header {
  font-size: $font-size !important;
}

.ag-header-group-cell-label {
  justify-content: center;
  font-size: $phi0;
}

.ag-header-cell[col-id='Global'] {
  color: $mdc-theme-primary;
}

.ag-root {
  border-radius: 1rem;
}

.ag-root-wrapper-body,
.ag-side-bar,
.ag-paging-panel {
  border: none !important;
}

.ag-status-bar {
  display: none !important;
}

.ag-root-wrapper {
  border-radius: 1rem;
  border: solid rgb(230, 230, 230) 1px;
  // Material Elevation 24 https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_variables.scss
  // box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
  font-weight: 100;
  padding: 12px;
}

.ag-root-wrapper-body {
  border-radius: 1rem;
  opacity: 0;
  transition: opacity $app-ease;
}

.grid-ready {
  .ag-root-wrapper-body {
    opacity: 1;
    transition: opacity $app-ease;
  }
}
</style>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
