<template>
  <div @click.stop="toggle" class="EditableField">
    <div v-if="!isToggled" value="value">
      <Ellipsis :name="currentValue" :width="width"/>
    </div>
    <div v-else class="inputWrapper">
      <input @blur.stop="toggle" v-model="currentValue" :maxlength="maxlength" />
    </div>
  </div>
</template>

<script>
import Ellipsis from "../Ellipsis";

export default {
  props: {
    isToggled: {
      default: false,
      type: Boolean,
    },
    value: {
      default: "",
      type: String,
    },
    maxlength: {
      default: "100",
      type: String,
    },
     width: {
      default: "200px",
      type: String,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    toggle: function () {
      this.$emit("changeField", this.currentValue);
      this.$emit("toggle ", !this.isToggled);
    },
  },
  components: {
    Ellipsis,
  },
};
</script>

<style scoped>
</style>