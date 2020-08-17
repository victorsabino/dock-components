<template>
  <div class="toggleRoot">
    <div class="toggleHead" @click="toggle" data-testid="toggle">
      <div class="toggleTitle lightGreen font20">{{ title }}</div>
      <md-icon v-if="isToggled"> arrow_drop_down </md-icon>
      <md-icon v-else> arrow_right </md-icon>
    </div>
    <div class="hr" />
    <slot name="content" v-if="isToggled" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: this.defaultToggle
    };
  },
  props: {
    title: {
      default: "Title",
      type: String
    },
    defaultToggle: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    toggle() {
      return (this.isToggled = !this.isToggled);
    }
  },
};
</script>
<style scoped>
.toggleHead {
  display: flex;
  text-transform: capitalize;
  cursor: pointer;
  justify-content: space-between;
}
.toggleTitle {
  height: 2px;
}
.hr {
  border-top: 1px solid #00000040;
  border-bottom: 1px solid #7ec6ae33;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
<style>
.toggleHead .md-icon {
  margin-left: 17px;
  margin-right: 17px;
}
</style>
