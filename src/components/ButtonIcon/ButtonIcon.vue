<template>
  <div
    class="buttonIcon"
    :style="`background-color: ${bgColor}; width: ${width || radius}; height: ${height || radius}`"
  >
    <md-icon :style="`color: ${color} !important`"> {{ icon }} </md-icon>
  </div>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    icon: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#10434F"
    },
    radius: {
      type: String,
      default: "38px"
    },
    width: {
      type: String | undefined,
      default: undefined
    },
    height: {
      type: String | undefined,
      default: undefined
    },
    color: {
      type: String,
      default: "red"
    }
  }
};
</script>
<style scoped>
.buttonIcon {
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.buttonIcon i {
  margin-top: 7px !important;
  margin-right: 0 !important;
}
</style>
