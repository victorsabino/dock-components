<template>
  <md-field :style="`height: ${height}px`" class="textarea">
    <label :class="hide">{{ label }}</label>
    <md-textarea
      resizable="false"
      style="height:90%;"
      v-bind:type="type"
      v-model="currentValue"
      :disabled="disabled"
      :maxlength="maxLength"
      :md-counter="maxLength"
      @change="shouldHideLabel"
    />
    <md-icon :v-if="icon" style="color: #D8D1C4 !important">{{ icon }}</md-icon>
  </md-field>
</template>

<script>
export default {
  props: ["label", "icon", "value", "type", "height", "disabled", "maxLength"],
  data() {
    return {
      hide: ""
    };
  },
  methods: {
    shouldHideLabel: function(val) {
      if (!val || (!val && !this.currentValue)) return;
      this.hide = val && val.target.value.length > 0 ? "hide" : "";
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style scoped>
.textarea {
  height: 16px;
  margin-top: 25px;
  color: #10434f57 !important;
  background-color: #E8E3DA !important;
  border-radius: 4px;
  box-shadow: 0px 2px 1px #dcd7cd;
  min-height: 35px;
  height: 200px;
  border: none !important;
  width: 100% !important;
  max-width: 100% !important;
  position: relative;
  padding-left: 5px;
  padding-top: 6px !important;
  margin-bottom: 5px;
  resize: none;
}

.hide {
  display: none !important;
}
.input label {
  color: #d8d1c4 !important;
  margin-top: -13px;
  margin-left: 20px;
  font-family: Open Sans, sans-serif;
}
.input i {
  top: 7px;
  position: absolute;
  right: 10px;
}
.input::after,
.input::before {
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
.md-has-textarea::after,
.md-has-textarea::before {
  border: none !important;
}
textarea {
  resize: none !important;
}
textarea::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  cursor: pointer;
}
textarea::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
textarea::-webkit-scrollbar-thumb {
  background: #d8d1c4;
  border: 0px none #ffffff;
  border-radius: 0px;
}
textarea::-webkit-scrollbar-thumb:hover {
  background: #d8d1c4;
}
textarea::-webkit-scrollbar-thumb:active {
  background: #d8d1c4;
}
textarea::-webkit-scrollbar-track {
  background: #ebe8e3;
  border: 0px none #ffffff;
  border-radius: 0px;
}
textarea::-webkit-scrollbar-track:hover {
  background: #ebe8e3;
}
textarea::-webkit-scrollbar-track:active {
  background: #ebe8e3;
}
textarea::-webkit-scrollbar-corner {
  background: transparent;
}
.textarea .md-textarea {
  padding-top: 0 !important;
}
.md-count {
  bottom: -20px;
}
</style>
