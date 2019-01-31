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
    group-default-expanded="-1"
    suppress-row-hover-highlight="true"
    suppress-tabbing="true"
    tree-data="true"
    :get-data-path="function(data) {return data.orgHierarchy}"
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
import "ag-grid-enterprise";
import { AgGridVue } from "ag-grid-vue";
import AgGridBase from "./AgGridBase.vue";

export default {
  name: "Settings",
  extends: AgGridBase,
  data() {
    return {
      columnDefs: [
        {
          field: "Tracker",
          cellRendererSelector: this.cellRendererSelector,
          sortable: false
        },
        {
          field: "HODLings",
          cellRendererSelector: this.cellRendererSelector,
          sortable: false
        },
        {
          field: "Rebalancer",
          cellRendererSelector: this.cellRendererSelector,
          sortable: false
        },
        {
          field: "Settings",
          cellRendererSelector: this.cellRendererSelector,
          sortable: false
        },
        {
          field: "Global",
          cellRendererSelector: this.cellRendererSelector,
          sortable: false
        }
      ],
      rowData: [
        {
          orgHierarchy: ["Performance"]
        },
        {
          orgHierarchy: ["Performance", "Pagination"],
          type: "Checkbox"
        },
        {
          orgHierarchy: ["Performance", "Animation"],
          type: "Checkbox"
        },
        {
          orgHierarchy: ["Appearance"]
        },
        {
          orgHierarchy: ["Appearance", "Height"],
          type: "Slider"
        },
        {
          orgHierarchy: ["Appearance", "Fullscreen"],
          type: "Switch"
        },
        {
          orgHierarchy: ["Appearance", "Theme"]
        },
        {
          orgHierarchy: ["Grid Customization"]
        },
        {
          orgHierarchy: ["Grid Customization", "Remember Grid Changes"],
          type: "Checkbox"
        },
        {
          orgHierarchy: ["Grid Customization", "Reset Grid"],
          type: "TextField"
        }
      ]
    };
  }
};
</script>
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
