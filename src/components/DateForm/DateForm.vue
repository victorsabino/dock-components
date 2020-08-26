<template>
  <div class="dateForm">
    <div class="dateFormRow"> {{ row }} </div>
    <div class="dateInputWrapper">
      <DateInput :right="right" :row="row" @input="emitInput"/>
    </div>
  </div>
</template>

<script>
import DateInput from "../DateInput";

export default {
  props: {
    row: {
      default: 'Row',
      type: String
    },
    right: {
      default: false,
      type: Boolean
    }
  },
  components: {
    DateInput
  },
  methods: {
    emitInput(payload) {
      this.$emit('input', payload);
    }
  },
}
</script>
<style scoped>
  .dateInputWrapper {
    margin-left: -15px;
    color: #103A4F;
  }
  .dateFormRow{
    margin-left: -10px;
    margin-top: 5px;
  }
</style>
<style>
  .dateInputWrapper > div:first-child {
    background-color: #F4F1EB !important;    
    margin-top: 0 !important;
} 
.dateForm {
  margin-top: 10px;
}
</style>
  