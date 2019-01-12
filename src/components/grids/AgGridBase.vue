───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <AgGridVue />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue'

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
      }
      // prettier-ignore
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
  methods: {
    onGridReady(params) {
      this.gridReady = true
      this.gridApi = params.api
      this.columnApi = params.columnApi

      const fieldArray = Object.keys(this.rowData[0])
      this.columnApi.autoSizeColumns(fieldArray)
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
