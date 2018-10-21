───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <AgGridVue
    :column-defs="columnDefs"
    :grid-ready="onGridReady"
    :row-data="rowData"
    :default-col-def="defaultColDef"
    row-height="rowHeight"
    enable-sorting="true"
    animate-rows="true"
    auto-size-padding="22"
    enable-col-resize="true"
    enable-filter="true"
    enable-range-selection="true"
    class="ag-grid ag-theme-balham"
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
      defaultColDef: {
        cellStyle: {
          'text-align': 'right',
          'line-height': '36px',
          'font-family': agShared.numbersFont,
          'font-weight': agShared.numbersFontWeight,
        },
      },
      // prettier-ignore
      columnDefs: [
        { field: '★'                      , headerTooltip: 'Starred'               , width: 78 , pinned: 'left'                                                                                                            },
        { field: '#'                      , headerTooltip: 'Rank'                  , width: 72 , pinned: 'left'                                                                                                            },
        { field: 'Name'                   , headerTooltip: 'Name'                  , width: 148, cellStyle: agShared.rightAlignedCellStyle, comparator: agShared.comparator.ignoreCase, pinned: 'left'                       },
        { field: 'Symbol'                 , headerTooltip: 'Ticker Symbol'         , width: 116, cellStyle: agShared.rightAlignedCellStyle, pinned: 'left'                                                                  },
        { field: 'Market Cap'             , headerTooltip: 'Market Capital'        , width: 172, valueFormatter: agShared.valueFormatter.currency, cellEditor: 'agTextCellEditor', cellEditorParams: { useFormatter: true } },
        { field: 'Market Share'           , headerTooltip: 'Market Share'          , width: 172, valueFormatter: agShared.valueFormatter.percentage                                                                         },
        { field: 'Price'                  , headerTooltip: 'Price'                 , width: 100, valueFormatter: agShared.valueFormatter.currency                                                                           },
        { field: 'Volume 24h'             , headerTooltip: 'Daily Volume'          , width: 172, valueFormatter: agShared.valueFormatter.currency                                                                           },
        { field: '1h'                     , headerTooltip: 'Hourly % Change'       , width: 80 , valueFormatter: agShared.valueFormatter.percentage                                                                         },
        { field: '24h'                    , headerTooltip: 'Daily % Change'        , width: 80 , valueFormatter: agShared.valueFormatter.percentage                                                                         },
        { field: '7d'                     , headerTooltip: 'Weekly % Change'       , width: 80 , valueFormatter: agShared.valueFormatter.percentage                                                                         },
        { field: 'Circulating'            , headerTooltip: 'Circulating Supply'    , width: 140                                                                                                                            },
        { field: 'Supply'                 , headerTooltip: 'Available Supply'      , width: 100                                                                                                                            },
        { field: 'Max Supply'             , headerTooltip: 'Maximum Supply'        , width: 140                                                                                                                            },
        { field: 'Growth @1% Market Share', headerTooltip: 'Potential Price Growth', width: 240, valueFormatter: 'value + "x"'                                                                                             },
        { field: 'CoinMarketCap URL'      , headerTooltip: 'CoinMarketCap.com Link', width: 300, cellStyle: agShared.rightAlignedCellStyle                                                                                  },
      ]
    }
  },
  methods: {
    // onGridReady(params) {
    //   this.api = params.api
    //   this.columnApi = params.columnApi
    //   document.getElementsByClassName('ag-root-wrapper-body')[0].className += ' grid-ready'
    // },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
:root {
  --ag-grid-height: 77vh;
}

@import 'sass/app';
@import 'sass/pow';
@import 'sass/phi';
@import 'sass/easings';

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

// .ag-root-wrapper-body {
//   opacity: 0;
// }

// .grid-ready {
//   opacity: 1;
//   transition: 0.08s ease-out;
// }
</style>
