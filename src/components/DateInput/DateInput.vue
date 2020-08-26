<template>
  <div class="dateInput" ref="dateInput">
    <md-datepicker
      v-model="value"
      md-immediately
      :md-disabled-dates="disabled"
      :md-open-on-focus="false"
      :dir="right ? 'rtl' : ''"
      :class="right ? 'right' : 'left'"
      class="iconFill"
      @input="emitValue"
    >
      <label
        :class="[
          shouldHideLabel , 
          right ? 'rightLabel' : ''
        ]"
      >dd/mm/aaaa</label>
    </md-datepicker>
  </div>
</template>

<script>
import { ptBR } from "vuejs-datepicker/dist/locale";
import moment from "moment";

export default {
  props: [
    "row",
    "type",
    "icon",
    "label",
    "right",
    "error",
    "value",
    "startDate",
    "disableDate",
  ],
  methods: {
    disabled(date) {
      if (!this.disableDate) return false;
      return moment(date) < moment(this.disableDate);
    },
    emitValue(val) {
      this.$emit('input', val)
    }
  },
  components: {},
  computed: {
    style() {
      if (this.error) {
        return `color: red !important`;
      }
      return "";
    },
    shouldHideLabel() {
      if (this.value === null) return "";
      return (this.value)
        ? "hide"
        : "";
    },
  },
  data: function() {
    return {
      value: null,
      ptBR
    };
  },
  beforeMount() {
    this.$material.locale.dateFormat = 'dd/MM/yyyy'
  },
  mounted () {
    this.$refs.dateInput.querySelector('input').addEventListener(
      'click',
      (e) => {
        this.$refs.dateInput.querySelector('input').focus();
        e.stopPropagation();
      }
    );
  }
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
::v-deep .md-field.md-clearable .md-input {
  color: #707070 !important;
  font-size: 14px;
  padding-right: 60px;
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
.dateInput input i {
  top: 25px;
  position: absolute;
  right: 10px;
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
</style>
