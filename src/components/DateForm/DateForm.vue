<template>
  <div class="dateForm">
    <div class="dateFormTitle"> {{ title }} </div>
    <div class="dateInputWrapper" @click="click">
      <DateInput/>
    </div>
  </div>
</template>

<script>
import DateInput from "../DateInput";

export default {
  props: {
    title: {
      default: 'Title',
      type: String
    }
  },
  components: {
    DateInput
  },
  methods: {
    click () {
      console.log('teste')
    }
  }
}
</script>
<style scoped>
  .dateInputWrapper {
    margin-left: -15px;
    color: #103A4F;
  }
  .dateFormTitle{
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
  