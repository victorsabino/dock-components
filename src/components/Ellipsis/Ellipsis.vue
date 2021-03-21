<template>
  <div class="ellipsis" :style="style"> {{name}} <md-tooltip class="ellipsisTooltip" md-direction="top">{{name}}</md-tooltip></div>
</template>
<script>
export default {
  props: {
    name: {
      default: "",
      type: String,
    },
    width: {
      default: "100px",
      type: String,
    },
  },
  computed: {
    style: function () {
      return `width: ${this.width}`;
    },
  },
};
</script>

<style>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  text-align: left;
  padding-left: 5px;
}
.ellipsisTooltip {
  z-index: 9999999;
}
</style>