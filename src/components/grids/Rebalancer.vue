───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <AgGridVue
    :class="classObject"
    :column-defs="columnDefs"
    :default-col-def="defaultColDef"
    :row-data="rowData"
    animate-rows="true"
    auto-size-padding="22"
    enable-range-selection="true"
    enter-moves-down-="true"
    enter-moves-down-after-edit="true"
    row-height="rowHeight"
    row-selection="multiple"
    suppress-cell-selection="false"
    suppress-row-click-selection="false"
    row-drag-managed="true"
    @grid-ready="onGridReady"
  />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
// import 'ag-grid-enterprise'
import { AgGridVue } from 'ag-grid-vue'
import AgGridBase from './AgGridBase.vue'

export default {
  name: 'Rebalancer',
  extends: AgGridBase,
  props: {
    rowData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      columnDefs: [
        {
          field: '★',
          headerTooltip: 'Starred',
          cellStyle: { 'text-align': 'left' },
          pinned: 'left',
          cellRenderer: () => {
            return '<div>☆</div>'
          },
        },
        {
          field: '#',
          headerTooltip: 'Rank',
          minWidth: 30,
          pinned: 'left',
        },
        {
          field: 'Name',
          headerTooltip: 'Name',
          cellStyle: { 'text-align': 'left' },
          comparator: this.comparator.ignoreCase,
          pinned: 'left',
        },
        {
          field: 'Symbol',
          cellStyle: { 'text-align': 'left' },
          headerTooltip: 'Ticker Symbol',
          pinned: 'left',
        },
        {
          field: 'Market Cap',
          headerTooltip: 'Market Capital',
          valueFormatter: this.valueFormatter.currency,
          cellEditor: 'agTextCellEditor',
          cellEditorParams: { useFormatter: true },
        },
        {
          field: 'Market Share',
          headerTooltip: 'Market Share',
          valueFormatter: this.valueFormatter.percentage,
        },
        {
          field: 'Price',
          headerTooltip: 'Price',
          valueFormatter: this.valueFormatter.currency,
        },
        {
          field: 'Volume 24h',
          headerTooltip: 'Daily Volume',
          valueFormatter: this.valueFormatter.currency,
        },
        {
          field: '1h',
          headerTooltip: 'Hourly % Change',
          valueFormatter: this.valueFormatter.percentage,
        },
        {
          field: '24h',
          headerTooltip: 'Daily % Change',
          valueFormatter: this.valueFormatter.percentage,
        },
        {
          field: '7d',
          headerTooltip: 'Weekly % Change',
          valueFormatter: this.valueFormatter.percentage,
        },
        {
          field: 'Circulating',
          headerTooltip: 'Circulating Supply',
        },
        {
          field: 'Supply',
          headerTooltip: 'Available Supply',
        },
        {
          field: 'Max Supply',
          headerTooltip: 'Maximum Supply',
        },
        {
          field: 'Growth @1% Market Share',
          headerTooltip: 'Potential Price Growth',
          valueFormatter: 'value + "x"',
        },
        {
          field: 'CoinMarketCap URL',
          headerTooltip: 'CoinMarketCap.com Link',
          cellStyle: { 'text-align': 'left' },
        },
        {
          field: 'Updated',
          headerTooltip: 'Last Updated',
          cellStyle: { 'text-align': 'left' },
        },
      ],
    }
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
