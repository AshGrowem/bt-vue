<template>
  <div>
    <mdc-button
      :disabled="buttonDisabled"
      @click="onClick">click me
    </mdc-button>
    <ag-grid-vue
      :column-defs="columnDefs"
      :row-data="rowData"
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
    />
  </div>
</template>

<style lang="scss">
$icons-path: '~ag-grid/src/styles/balham-icons/';
@import '~ag-grid/src/styles/ag-grid';
@import '~ag-grid/src/styles/ag-theme-balham';
@import '~@material/button/mdc-button'
</style>

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
}
</script>
