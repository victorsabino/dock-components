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
      @input="emitInput"
    >
      <label
        ref="label"
        :class="[
          shouldHideLabel,
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
    data: function () {
      return {
        ptBR,
        timer: undefined,
        val: "",
      };
    },
    disabled(date) {
      if (!this.disableDate || this.value === "") return false;
      return moment(date) < moment(this.disableDate);
    },
    emitValue(val) {
      if (this.timer) clearTimeout();
      this.timer = setTimeout(() => {
        this.$emit("input", val);
      }, 100);
    },
    isDateValid(val) {
      var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      // Match the date format through regular expression
      if (val && typeof val.match === "function") return val.match(dateformat);
    },
    formatDate(str) {
      if (!str) return;
      let input = str;
      var len = str.length;
      if (len >= 10) return str.slice(0, 10);
      if (len === 2) input += "/";
      if (len === 5) input += "/";

      return input;
    },
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
      if (!this.value) return "dd/MM/yyyy";
      this.emitValue(this.value);
      return "hide";
    },
  },
  beforeMount() {
    this.$material.locale.dateFormat = "dd/MM/yyyy";
  },
  mounted() {
    const that = this;
    this.$refs.dateInput
      .querySelector("input")
      .addEventListener("click", (e) => {
        this.$refs.dateInput.querySelector("input").focus();
        e.stopPropagation();
      });
    this.$refs.dateInput
      .querySelector("input")
      .addEventListener("input", (e) => {
        let v = "";
        let _date = this.$refs.dateInput.querySelector("input").value;
        if (!e.data) return;
        const _formatedDate = that.formatDate(_date);

        if (this.$refs.dateInput.querySelector("input").value.length > 0) that.hideLabel = that.$refs.label.style.display = 'none';
        that.$refs.dateInput.querySelector("input").value = _formatedDate;
      })
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
</style>
