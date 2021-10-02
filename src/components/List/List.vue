<template>
  <div class="listItems" :style="style()">
    <div class="listItem" v-for="(item, index) in list" :key="index">
      <div class="item" @click="emit(item)"  :style="itemStyle()">{{ computeItem(item) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    attr: {
      type: String,
      default: undefined,
    },
    direction: {
      default: "horizontal",
      type: String,
    },
    color: {
      default: "",
    },
    marginLeft: {
      default: "",
    },
    clickable: {
      default: true,
    },
    fontSize: {
      default: ''
    }
  },
  methods: {
    style() {
      let _style = "";
      if (this.direction === "horizontal")
        _style += "display: flex; flex-direction: row;";
      if (this.marginLeft !== "")
         _style += `margin-left: ${this.marginLeft};`;
      return _style;
    },
    itemStyle () {
      let _style = '';
      if (this.color !== "") _style += `color: ${this.color};`;
      if (this.fontSize !== "") _style += `font-size: ${this.fontSize};`;
      if (!this.clickable) {
        _style +=
          "pointer-events: none !important; cursor: default; text-decoration: none !important;";
      }

      return _style;
    },
    computeItem: function (item) {
      if (this.attr) return item[this.attr];
      return item;
    },
    emit: function (item) {
      this.$emit("click-item", item);
    },
  },
};
</script>

<style scoped>
.listItems {
  margin-left: 75px;
  margin-top: 15px;
}
.listItem {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 15px;
}
.item {
  text-align: left;
  color: #10434f;
  text-decoration: underline;
  font-size: 17px;
  letter-spacing: 0.15px;
  margin-bottom: 5px;
}
</style>
