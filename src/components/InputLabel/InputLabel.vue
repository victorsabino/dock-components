<template>
  <div class="inputWrapper">
    <label class="font15 openSans darkBlue formLabel">{{ label }}</label>
    <CustomInput
      :disabled="editing"
      v-model="model"
      :label="labelInput ? labelInput : label"
      :maxlength="60"
      :type="type"
    />
    <div class="labelWrapper" v-if="typeof descricao === 'string'">
      <label>{{ descricao }}</label>
    </div>
    <div class="labelWrapper" v-else>
      <div v-for="desc in descricao" :key="desc.id">
        <label>{{ desc }}</label>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../CustomInput/CustomInput.vue";

export default {
  components: {
    CustomInput,
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    labelInput: {
      type: String,
      default: ""
    },
    descricao: {
      type: String || Array,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    editing: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      model: this.value ? this.value : "",
    }
  },
  watch: {
    model(newValue) {
      this.$emit("input", newValue)
    }
  },
}
</script>

<style scoped>
.labelWrapper {
  text-align: left;
  font-size: 12px;
  font-family: Open Sans, sans-serif;
  letter-spacing: 0.4px;
  color: #10434f;
  opacity: 0.5;
  width: fit-content;
  display: block;
  margin-top: 5px;
}
.formLabel {
  margin-bottom: 0;
  margin-top: 10px;
}
.inputWrapper {
  margin-top: 15px;
  text-align: left;
  font-size: 12px;
}
.inputWrapper > label:first-child {
  -webkit-text-fill-color: #103a4f !important;
  margin-left: 5px;
}
.inputWrapper .input {
  margin-top: 5px;
}
.font15 {
  font-size: 15px;
}
.openSans {
  font-family: 'Open Sans', sans-serif;
}
.darkBlue {
  color: #10434f;
}
</style>