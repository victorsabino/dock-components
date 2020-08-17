<template>
  <div @click.stop="toggle" class="EditableField">
    <div v-if="!isToggled" value="value">{{vmodel}}</div>
    <div v-else class="inputWrapper">
      <input @blur.stop="toggle" v-model="vmodel"/>
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
  computed: {
    vmodel: {
      get(){
        return this.value
      },
      set(val){
        this.$emit("changeField", val);
      }
    }
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