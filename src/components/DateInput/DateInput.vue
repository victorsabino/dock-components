<template>
  <div class="dateInput">
    <md-datepicker
      v-model="currentValue"
      md-immediately
      :md-disabled-dates="disabled"
    />
  </div>
</template>

<script>
import { ptBR } from "vuejs-datepicker/dist/locale";
import moment from "moment";

export default {
  props: [
    "label",
    "icon",
    "value",
    "type",
    "startDate",
    "error",
    "disableDate"
  ],
  methods: {
    shouldHideLabel: function() {
      if (this.currentValue === null) return "";
      return "hide";
    },
    disabled(date) {
      if (!this.disableDate) return false;
      return moment(date) < moment(this.disableDate);
    }
  },
  components: {},
  computed: {
    style() {
      if (this.error) {
        return `color: red !important`;
      }
      return "";
    }
  },
  data: function() {
    return {
      currentValue: null,
      ptBR
    };
  },
  watch: {
    currentValue(val) {
      if (!val) return this.$emit("input", undefined);
      this.$emit("input", moment(val, "YYYY-MM-DD"));
    }
  },
  beforeMount() {
    if (this.startDate)
      this.currentValue = moment(this.startDate, "YYYY-MM-DD")
        .add(1, "hour")
        .toDate();
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
.dateInput {
  z-index: 99999999999 !important;
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
</style>
