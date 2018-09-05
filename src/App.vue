// * ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<template>
  <div class="App">
    <mdc-top-app-bar/>
    <ag-grid-vue
      :column-defs="columnDefs"
      :row-data="rowData"
      :default-col-def="defaultColDef"
      :grid-ready="onGridReady"
      :column-resized="onColumnResized"
      row-height="rowHeight"
      enable-sorting="true"
      animate-rows="true"
      auto-size-padding="22"
      enable-col-resize="true"
      enable-filter="true"
      enable-range-selection="true"
      style="width: 500px; height: 500px;"
      class="ag-grid ag-theme-balham"
      row-selection="multiple"
      suppress-cell-selection="true"
      suppress-row-click-selection="true"
    />
  </div>
</template>
// * ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<script>
import { AgGridVue } from 'ag-grid-vue'
import 'ag-grid-enterprise'

export default {
  name: 'App',
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
      test: 'test',
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: 'Make',
        field: 'make',
      },
      {
        headerName: 'Model',
        field: 'model',
      },
      {
        headerName: 'Price',
        field: 'price',
      },
    ]
    this.rowData = [
      {
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
    ]
  },
  methods: {
    onGridReady(params) {
      this.api = params.api
      this.columnApi = params.columnApi
      document.getElementsByClassName('ag-root-wrapper-body')[0].className += ' grid-ready'
      this.api.setRowData(this.props.rowData)
      this.columnApi.autoSizeColumns(Object.keys(this.props.rowData[0]))
    },
    onColumnResized(params) {
      document.getElementsByClassName('ag-root-wrapper-body')[0].className += ' grid-ready'
    },
  },
}
</script>
// * ───────────────────────────────────────────────────────────────────────────────────────────────────────
<style lang="scss">
@import 'global';
</style>
// * ───────────────────────────────────────────────────────────────────────────────────────────────────────