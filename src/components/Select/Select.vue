<template>
  <md-field :style="style()" class="input md-layout-item md-size-100">
    <label v-if="showLabel" for="Order">{{ label }}</label>
    <md-select :disabled="disabled" v-model="selected" :name="name" :id="id">
      <md-option
        v-for="option in options.filter(obj => typeof obj == typeof {})"
        v-bind:value="option[objKey]"
        v-bind:key="option[objKey]"
        >{{ option[showKey] }}</md-option
      >
      <md-option
        v-for="option in options.filter(obj => typeof obj != typeof {})"
        v-bind:value="option"
        v-bind:key="option"
        >{{ option }}</md-option
      >
    </md-select>
  </md-field>
</template>

<script>
export default {
  props: {
    label: {},
    "v-modal": {},
    name: {},
    id: {},
    currentValue: null,
    backgroundColor: {},
    options: {
      default: () => [],
      type: Array
    },
    objKey: {},
    shadow: {},
    showKey: {},
    disabled: {},
    reset: {
      default: () => false
    },
    startValue: {
      default: () => null
    },
    color: {}
  },

  data: function() {
    return {
      selected: null,
      option: "",
      hasSetedStartedValued: false,
    };
  },
  methods: {
    style: function() {
      return `
        box-shadow: ${this.shadow} !important;
        background-color: ${this.backgroundColor} !important;
        color: ${this.color} !important
      `;
    }
  },
  beforeMount() {
    if (!this.label) {
      this.options[0];
    }
    if (this.currentValue) {
      this.selected = this.currentValue;
    }
     if (this.startValue) {
      this.selected = this.startValue;
    }
  },
  computed: {
    showLabel: function () {
      return !this.selected;
    }
  },
  updated() {
    if (this.currentValue) {
      this.selected = this.currentValue;
    }
  },
  watch: {
    startValue: function(val) {
      if (this.selected == null) this.selected = val;
    },
    selected: function(val) {
      if  (this.startValue && !this.hasSetedStartedValued) {
        this.hasSetedStartedValued = true;
        return; 
      }
      this.$emit("change", val);
      
      // Remove currently selected after selecting
      if (this.reset) setTimeout(() => (this.selected = this.startValue), 200);
    }
  }
};
</script>

<style scoped>
.input {
  height: 16px;
  margin-top: 25px;
  color: #104550 !important;
  -webkit-text-fill-color: #104550;

  background-color: #E8E3DA;
  border-radius: 4px;
  box-shadow: 0px 2px 1px #dcd7cd;
  max-width: 90px;
  min-height: 35px;
  height: 40px;
  padding-top: 5px;
  padding-left: 5px;
  z-index: 1;
}
.input input,
.input label {
  -webkit-text-fill-color: #104550;
}
.input label {
  color: #104550 !important;
  margin-top: -10px;
  margin-left: 20px;
  font-family: Open Sans, sans-serif;
}
.input i {
  margin-top: 0px;
}
.input::after,
.input::before {
  background-color: transparent !important;
}
</style>

<style>
.md-menu i {
  margin-top: 2px !important;
  margin-right: 3px;
}
.md-menu {
  overflow: hidden !important;
  z-index: 999;
}
.md-select-menu {
  margin-top: 50px;
  z-index: 998;
  /* margin-left: 15px; */
  width: 100%;
}

.md-menu-content-container {
  border-radius: 9px;
  z-index: 999;
}
.md-field {
  margin-bottom: 0 !important;
  margin-top: 0px !important;
}
.profile .md-field {
  width: 90px !important;
  height: 30px !important;
  margin-top: -2px !important;
}
.profile .md-icon {
  margin-top: 3px !important;
}
.profile .md-icon svg {
  fill: #4eb9b1 !important;
}
.md-select input {
  margin-left: 16px;
}
</style>
