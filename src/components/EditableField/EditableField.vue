<template>
  <div @click.stop="toggle" class="EditableField">
    <div v-if="!isToggled" value="value">{{value}}</div>
    <div v-else class="inputWrapper">
      <input @blur.stop="toggle" v-model="value"/>
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
    data: function () {
      return {
        editableValue: this.props.value
      }
    },
    methods: { 
        toggle: () => {
            console.log('emit toggle')
            this.$emit("toggle ", !this.isToggled)
        },
    }
}
</script>

<style scoped>
</style>