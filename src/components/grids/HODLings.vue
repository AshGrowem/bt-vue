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
import 'ag-grid-enterprise'
import { AgGridVue } from 'ag-grid-vue'
import AgGridBase from './AgGridBase.vue'

export default {
  name: 'HODLings',
  extends: AgGridBase,
  props: {
    rowData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      //prettier-ignore
      columnDefs: [
        {
          headerName: 'Coins',
          children: [
            {field: '#', headerTooltip: 'Rank', rowDrag: true, width: 50, pinned: 'left', },
            { field: 'Name', headerTooltip: 'Name', cellStyle: { 'text-align': 'left' }, comparator: this.comparator.sortIgnoreCase, pinned: 'left', },
            { field: 'Symbol', headerTooltip: 'Ticker Symbol', cellStyle: { 'text-align': 'left' }, pinned: 'left', },
            { field: 'Price', headerTooltip: 'Price', cellStyle: { 'text-align': 'right' }, pinned: 'left', valueFormatter: this.valueFormatter.currency, },
            {
              field: 'Total',
              headerTooltip: 'Total',
              cellStyle: { 'text-align': 'right' },
              pinned: 'left',
              width: 90,
              valueGetter: params => {
                const wallet1 = params.data['Wallet 1']
                const wallet2 = params.data['Wallet 2']
                if (typeof wallet1 === 'undefined') { return wallet2 }
                if (typeof wallet2 === 'undefined') { return wallet1 }
                const total = wallet1 + wallet2
                return isNaN(total) ? '' : total
              },
            },
          ],
        },
        {
          headerName: 'Wallets',
          children: [
            { field: 'Wallet 1', headerTooltip: 'Wallet 1', cellStyle: { 'text-align': 'right' }, editable: true, valueParser: params => { return Number(params.newValue) }, },
            { field: 'Wallet 2', headerTooltip: 'Wallet 2', cellStyle: { 'text-align': 'right' }, editable: true, valueParser: params => { return Number(params.newValue) }, },
          ],
        },
        {
          headerName: 'Ownership',
          children: [
            { field: 'Me', headerTooltip: 'Me', cellStyle: { 'text-align': 'right' }, },
            { field: 'Friend 1', headerTooltip: 'Friend 1', cellStyle: { 'text-align': 'right' }, },
            { field: 'Friend 2', headerTooltip: 'Friend 2', cellStyle: { 'text-align': 'right' }, },
          ],
        },
      ]
    }
  },
  methods: {
    onGridReady(params) {
      this.gridReady = true
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    rowDataChanged(params) {
      const fieldArray = Object.keys(this.rowData[0])
      this.columnApi.autoSizeColumns(fieldArray)
    },
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
