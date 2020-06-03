<template>
  <div class="checkboxRoot">
    <md-checkbox v-model="currentValue">
      <div class="darkBlue openSans font14">{{ label }}</div>
    </md-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: "",
      type: String
    },
    value: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  }
};
</script>
<style>
.checkboxRoot .md-checkbox-container {
  border: 2px solid transparent !important;
  background-color: #ebe8e3;
  box-shadow: 0px 2px 1px #dcd7cd;
  padding-left: px;
  padding-top: 2px;
}
</style>
