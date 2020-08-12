<template>
  <div @click.stop="toggle" class="EditableField">
    <div v-if="!isToggled" value="value" @blur="toggle">{{value}}</div>
    <div v-else class="inputWrapper">
      <input :value="value"/>
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
        }
    },
    data: {

    },
    methods: { 
        toggle: function () {
            this.$emit("toggle ", !this.isToggled)
        },
    }
}
</script>

<style scoped>
</style>