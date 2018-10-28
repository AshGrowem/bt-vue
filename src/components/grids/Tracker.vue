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
    enter-moves-down-="true"
    enter-moves-down-after-edit="true"
    row-height="rowHeight"
    row-selection="multiple"
    suppress-cell-selection="false"
    suppress-row-click-selection="false"
  />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import 'ag-grid-enterprise'
import { AgGridVue } from 'ag-grid-vue'
import AgGridBase from './AgGridBase.vue'

export default {
  name: 'Tracker',
  extends: AgGridBase,
  props: {
    rowData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      // prettier-ignore
      columnDefs: [
        { field: '★'                      , headerTooltip: 'Starred'               , width: 78 , pinned: 'left'                                                                                                            },
        { field: '#'                      , headerTooltip: 'Rank'                  , width: 72 , pinned: 'left'                                                                                                            },
        { field: 'Name'                   , headerTooltip: 'Name'                  , width: 148, cellStyle: this.rightAlignedCellStyle, comparator: this.comparator.ignoreCase, pinned: 'left'                       },
        { field: 'Symbol'                 , headerTooltip: 'Ticker Symbol'         , width: 116, cellStyle: this.rightAlignedCellStyle, pinned: 'left'                                                                  },
        { field: 'Market Cap'             , headerTooltip: 'Market Capital'        , width: 172, valueFormatter: this.valueFormatter.currency, cellEditor: 'agTextCellEditor', cellEditorParams: { useFormatter: true } },
        { field: 'Market Share'           , headerTooltip: 'Market Share'          , width: 172, valueFormatter: this.valueFormatter.percentage                                                                         },
        { field: 'Price'                  , headerTooltip: 'Price'                 , width: 100, valueFormatter: this.valueFormatter.currency                                                                           },
        { field: 'Volume 24h'             , headerTooltip: 'Daily Volume'          , width: 172, valueFormatter: this.valueFormatter.currency                                                                           },
        { field: '1h'                     , headerTooltip: 'Hourly % Change'       , width: 80 , valueFormatter: this.valueFormatter.percentage                                                                         },
        { field: '24h'                    , headerTooltip: 'Daily % Change'        , width: 80 , valueFormatter: this.valueFormatter.percentage                                                                         },
        { field: '7d'                     , headerTooltip: 'Weekly % Change'       , width: 80 , valueFormatter: this.valueFormatter.percentage                                                                         },
        { field: 'Circulating'            , headerTooltip: 'Circulating Supply'    , width: 140                                                                                                                            },
        { field: 'Supply'                 , headerTooltip: 'Available Supply'      , width: 100                                                                                                                            },
        { field: 'Max Supply'             , headerTooltip: 'Maximum Supply'        , width: 140                                                                                                                            },
        { field: 'Growth @1% Market Share', headerTooltip: 'Potential Price Growth', width: 240, valueFormatter: 'value + "x"'                                                                                             },
        { field: 'CoinMarketCap URL'      , headerTooltip: 'CoinMarketCap.com Link', width: 300, cellStyle: this.rightAlignedCellStyle                                                                                  },
      ]
    }
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
