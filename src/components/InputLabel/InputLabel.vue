<template>
  <div class="inputWrapper">
    <label class="font15 openSans darkBlue formLabel">{{ label }}</label>
    <CustomInput
      :disabled="editing"
      v-model="model"
      :label="labelInput ? labelInput : label"
      :maxlength="maxlenght"
      :type="type"
      v-if="type !== 'number'"
    />
    <CustomInput
      class="numberInput"
      :disabled="editing"
      v-model="number"
      :label="labelInput ? labelInput : label"
      :maxlength="maxlenght"
      :type="type"
      v-else
    />
    <div class="" v-if="typeof descricao === 'string'">
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
      type: String || Number,
    },
    editing: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    },
    maxlenght: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      model: this.value ? this.value : null,
      number: this.value ? this.value : null,
    }
  },
  methods: {
    insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
  },
  mounted () {
    Array.from(document.getElementsByClassName('numberInput')).map( (number, id) => {
      number.childNodes[2].addEventListener("input", (el, biding, node) => {
        let value = number.childNodes[2].value;
        if(value.indexOf('.') > -1 || value.indexOf(',') > -1){
          value = value.replace('.' , ',');
          value = value.replace(',' , '');
          number.childNodes[2].value = this.insert(value, value.length - 2, ".")
          el.target.__vue__.model = this.insert(value, value.length - 2, ".")
        }
      })
    })
    if(this.type == 'number'){
      this.$emit("input", this.number);
    }else {
      this.$emit("input", this.model);
    }
  },
  watch: {
    model(newValue) {
      this.$emit("input", newValue)
    },
    number(newValue) {
      this.$emit("input", newValue)
    },
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
  color: #103a4f !important;
  margin-left: 5px;
}
.inputWrapper .input {
  margin-top: 5px;
}
</style>