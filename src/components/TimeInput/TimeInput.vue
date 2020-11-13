<template>
  <div class="dateInput" ref="dateInput">
    <VueCtkDateTimePicker v-model="val" id="time" @input="emit" :no-keyboard="true" :noClearButton="false" format="DD/MM/YYYY hh:mm" formatted="DD/MM/YYYY hh:mm" :maxDate="maxDate" :minDate="minDate"/>
  </div>
</template>

<script>
import { ptBR } from "vuejs-datepicker/dist/locale";
import moment from "moment";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import '../../../node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import './style.css';

export default {
  components: {
    VueCtkDateTimePicker,
  },
  props: {
    row: {
      type: String,
      default: "",
    },
    right: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Date,
      default: undefined,
    },
    maxDate: {
      type: String,
      default: ''
    },
    minDate: {
      type: String,
      default: ''
    },
  },
  data: function () {
    return {
      ptBR,
      timer: undefined,
      val: undefined,
    };
  },
  methods: {
    emit (val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style scoped>
.hide {
  display: none !important;
}
.md-focused label {
  display: none;
}
.md-field {
  padding-top: 0;
}

.md-input {
  position: relative;
  top: 4px;
}
.dateInput {
  z-index: 99999999999;
}
.left {
  padding-left: 6px;
}
.right {
  padding-right: 6px;
}
.rightLabel {
  left: 8px !important;
  top: 14px !important;
}
.md-field label {
  top: 20px;
  font-size: 14px;
  color: #707070;
}
.iconFill {
  fill: #103a4f;
}
</style>

<style>
.dateInput input {
  margin-bottom: 0px;
  z-index: 99999999999 !important;
}

.dateInput input label {
  color: #104550;
  margin-top: 7px;
  margin-left: 20px;
  font-family: Open Sans, sans-serif;
  z-index: 1;
}
.dateInput i {
  margin-top: 0 !important;
}
.dateInput input::after,
.dateInput input::before {
  background-color: transparent !important;
}
.md-toggle-password {
  margin-top: -10px !important;
}
.dateInput {
  border: 0;
  height: 16px;
  margin-top: 20px;
  color: #104550 !important;
  background-color: #ebe8e3 !important;
  border-radius: 4px;
  box-shadow: 0px 2px 1px #dcd7cd;
  min-height: 35px;
  height: 40px;
  width: 100% !important;
  max-width: 100% !important;
  position: relative;
  padding-left: 5px;
  padding-top: 6px !important;
  margin-bottom: 5px;
}
::placeholder {
  color: #104550;
}
.vdp-datepicker {
  width: 100% !important;
}
.right input {
  position: relative;
  left: 8px;
  padding-right: 0px !important;
  margin-left: 0px !important;
  direction: ltr !important;
  max-width: 130px;
}
.dateInput .before {
  height: 12px !important;
}
</style>
