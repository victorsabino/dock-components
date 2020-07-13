<template>
  <div class="tableRoot">
    <div>
      <md-table>
        <md-table-row class="head">
          <md-table-head
            md-numeric
            v-for="(data, index) in Object.entries(headerData)"
            :key="index"
          >
            <div class="row">
              <div class="rowTitle" v-html="data[1]"></div>
              <div class="divisor" v-if="index + 1 < headerDataLength" />
              <div v-else class="divisor hidden" />
            </div>
          </md-table-head>
        </md-table-row>
        <md-table-row v-for="(data, index) in rowData" :key="index" class="tableRow">
          <md-table-cell md-numeric v-for="(row, index) in data" :key="index"
            >
              <div class="row bodyRow">
                <div class="rowTitle">{{ row }}</div>
                <div class="divisorRow" v-if="index + 1 < headerDataLength" />
              </div>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rowData: {
      default: [
        ["123321", "row1 2", "row1 3", "row1 1", "row1 2", "row1 3", "row1 1"],
        ["321321", "row2 2", "row2 3", "row1 1", "row1 2", "row1 3", "row1 1"]
      ]
    },
    headerData: {
      default: {header1: `<md-checkbox> teste</md-checkbox>`, header2: "header 2", header3: "header 3", header4: "header 2", header5: "header 3", header6: "header 2", header7: "header 3", }
    }
  },
  computed: {
    headerDataLength: function () {
      return Object.keys(this.headerData).length;
    }
  }
};
</script>
<style scoped>
.head {
  background-color: #4ea3b9;
  color: #f4f1eb;
}
.divisor {
  border-left: 1px solid #103a4f6e;
  border-right: 1px solid #e8e3da8f;
  height: 100%;
  width: 1px;
  margin-left: 0px;
}
.divisorRow {
  border-left: 1px solid #e5e1d7;
  border-right: 1px solid #f8f7f3;
}
.row {
  display: flex;
  height: 32px;
  justify-content: space-between;
  text-align: center;
}
.rowTitle {
  text-align: center;
  width: 100%;
  font-size: 15px;
  line-height: 30px;
}

</style>

<style>
.tableRoot .md-table-head-label {
  width: 100%;
}
.tableRoot .tableRow {
  background-color: #F4F1EB;
  color: #00000099;
  border-top: 4px solid #889da7;
  font-family: 'Open Sans', sans-serif;
  }
  .tableRoot .md-table-content {
    border-radius: 4px;
  }
.tableRoot .md-table-head-label {
  font-weight: 400;
  text-transform: uppercase;
}
</style>