<template>
  <div
    class="buttonIcon"
    :style="`background-color: ${bgcolor}; width: ${width || radius}; height: ${height || radius}`"
  >
    <md-icon :style="`color: ${color} !important; margin-left:${marginLeft}`"> {{ icon }} </md-icon>
  </div>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    icon: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: '#4eb9b1'
    },
    radius: {
      type: String,
      default: '38px'
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
      default: ''
    },
    marginLeft: {
      type: String,
      default: '0px'
    },
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
  margin-top: 7px;
  margin-right: 0 !important;
}

</style>
