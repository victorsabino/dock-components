<template>
  <div @click="toggle" class="EditableFIeld">
    <div v-if="!isToggled" value="value">{{value}}</div>
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
        }
    }
}
</script>

<style scoped>
</style>