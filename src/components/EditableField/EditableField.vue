<template>
  <div @click.stop="toggle" class="EditableField">
    <div v-if="!isToggled" value="value">{{currentValue}}</div>
    <div v-else class="inputWrapper">
      <input @blur.stop="toggle" v-model="currentValue" :maxlength="maxlength"/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isToggled: {
            default: false,
            type: Boolean
        },
        value: {
            default: '',
            type: String
        },
        maxlength: {
          default: '100',
          type: String
        }
    },
    data() {
      return {
        currentValue: this.value,
      }
    }, 
    methods: { 
        toggle: function () {
          this.$emit("changeField", this.currentValue);
          this.$emit("toggle ", !this.isToggled)
        },
    }
}
</script>

<style scoped>
</style>