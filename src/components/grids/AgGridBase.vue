───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <AgGridVue
    :class="classObject"
    :column-defs="columnDefs"
    :default-col-def="defaultColDef"
    :grid-ready="onGridReady"
    :row-data="rowData"
    animate-rows="true"
    auto-size-padding="22"
    enable-col-resize="true"
    enable-filter="true"
    enable-range-selection="true"
    enable-sorting="true"
    row-height="rowHeight"
    row-selection="multiple"
    suppress-cell-selection="false"
    suppress-row-click-selection="false"
  />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import { AgGridVue } from 'ag-grid-vue'
import 'ag-grid-enterprise'
import { agShared } from './agShared.js'
// import { ClientSideRowModel } from 'ag-grid-community'

export default {
  name: 'Tracker',
  components: {
    AgGridVue,
  },
  props: {
    rowData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      gridReady: false,
      defaultColDef: {
        classes: [],
        cellStyle: {
          'text-align': 'right',
          'line-height': '36px',
          'font-family': agShared.numbersFont,
          'font-weight': agShared.numbersFontWeight,
        },
      },
      // prettier-ignore
    }
  },
  computed: {
    classObject: function() {
      return {
        'ag-grid': true,
        'ag-theme-balham': true,
        'grid-ready': this.gridReady,
      }
    },
  },
  methods: {
    onGridReady(params) {
      this.api = params.api
      this.columnApi = params.columnApi
      this.gridReady = true
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
:root {
  --ag-grid-height: 77vh;
}

@import '../../sass/app';
@import '../../sass/pow';
@import '../../sass/phi';

@import '~ag-grid-community/src/styles/ag-grid';
@import '~ag-grid-community/src/styles/ag-theme-balham';

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
  padding: $font-size * phi(2);
  padding-top: $font-size * phi(1);
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
  font-size: $font-size * phi(0);
}

.ag-header-cell[col-id='Global'] {
  color: $mdc-theme-primary;
}

.ag-root-wrapper {
  font-weight: 100;
  border: solid rgb(230, 230, 230) 1px;
  box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.32);
  padding: 12px;
}

.ag-root-wrapper-body {
  opacity: 0;
}

.grid-ready {
  .ag-root-wrapper-body {
    opacity: 1;
    transition: opacity $app-ease;
  }
}
</style>
