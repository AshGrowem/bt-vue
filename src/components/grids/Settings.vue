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
    suppress-cell-selection="true"
    suppress-row-click-selection="true"
    row-drag-managed="true"
    group-default-expanded="-1"
    suppress-row-hover-highlight="true"
    suppress-tabbing="true"
    tree-data="true"
    :get-data-path="function(data) {console.info(data)}"
    :get-row-height="params => {
      switch (params.data.type) {
      case 'TextField':
        return 116
      case 'Slider':
        return 72
      default:
        return 43
      }
    }"
    :auto-group-column-def="{ headerName: 'Options', colId: 'Options', width: 240, cellRendererParams: { suppressCount: true, }, }"
    @grid-ready="onGridReady"
  />
</template>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import { AgGridVue } from 'ag-grid-vue'
// import 'ag-grid-enterprise'
import AgGridBase from './AgGridBase.vue'

export default {
  name: 'Settings',
  extends: AgGridBase,
  data() {
    return {
      columnDefs: [
        {
          field: 'Tracker',
          cellRendererSelector: this.cellRendererSelector,
          suppressSorting: true,
        },
        {
          field: 'HODLings',
          cellRendererSelector: this.cellRendererSelector,
          suppressSorting: true,
        },
        {
          field: 'Rebalancer',
          cellRendererSelector: this.cellRendererSelector,
          suppressSorting: true,
        },
        {
          field: 'Settings',
          cellRendererSelector: this.cellRendererSelector,
          suppressSorting: true,
        },
        {
          field: 'Global',
          cellRendererSelector: this.cellRendererSelector,
          suppressSorting: true,
        },
      ],
      rowData: [
        {
          hierarchy: ['Performance'],
        },
        {
          hierarchy: ['Performance', 'Pagination'],
          type: 'Checkbox',
        },
        {
          hierarchy: ['Appearance'],
        },
        {
          hierarchy: ['Appearance', 'Height'],
          type: 'Slider',
        },
        {
          hierarchy: ['Appearance', 'Fullscreen'],
          type: 'Switch',
        },
        {
          hierarchy: ['Appearance', 'Theme'],
        },
        {
          hierarchy: ['Grid Customization'],
        },
        {
          hierarchy: ['Grid Customization', 'Remember Grid Changes'],
          type: 'Checkbox',
        },
        {
          hierarchy: ['Grid Customization', 'Reset Grid'],
          type: 'TextField',
        },
      ],
    }
  },
}
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
