<template>
  <md-field class="customInput">
    <label :style="style" :class="shouldHideLabel">{{ label }}</label>
    <md-input
      v-if="mask"
      v-mask="mask"
      :placeholder="placeholder"
      :disabled="disabled === 'true'"
      v-bind:type="type"
      v-model="currentValue"
      v-decimal="maxDecimal"
      :maxlength="maxLength"
      :md-counter="maxLength"
      @blur="blur"
    />
    <md-input
      v-else
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind:type="type"
      v-model="currentValue"
      :step="step"
      :maxlength="maxLength"
      :pattern="pattern"
      v-decimal="maxDecimal"
      @blur="blur"
    />

    <md-icon :v-if="icon" style="color: #D8D1C4 !important">{{ icon }}</md-icon>
  </md-field>
</template>

<script>
export default {
  data() {
    return {
      currentVal: false
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    maxDecimal: {
      type: String,
      default: "999"
    },
    icon: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    pattern: {
      type: String,
      default: ""
    },
    step: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Array,
      default: () => {}
    },
    blur: {
      default: () => {},
      type: Function
    },
    maxLength: {}
  },
  methods: {},
  computed: {
    style() {
      if (this.error) {
        return `color: red !important`;
      }
      return "color:  #104550;";
    },
    shouldHideLabel() {
      if (this.currentVal === null || !this.value) return "";
      return (this.currentVal && this.currentVal.length > 0) ||
        (this.value && this.value.length > 0)
        ? "hide"
        : "";
    },
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.currentVal = val;
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style scoped>
.customInput {
  height: 16px;
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
.hide {
  display: none !important;
}
.customInput label {
  color: #104550;
  margin-top: -13px;
  margin-left: 20px;
  font-family: Open Sans, sans-serif;
}
.customInput i {
  top: 7px;
  position: absolute;
  right: 10px;
}
.customInput::after,
.customInput::before {
  background-color: transparent !important;
}
.md-focused label {
  display: none;
}

.md-field {
  padding-top: 0;
}
</style>

<style>
.md-toggle-password {
  margin-top: -10px !important;
}
.customInput input {
  margin-left: 16px;
  width: 100%;
}
</style>
