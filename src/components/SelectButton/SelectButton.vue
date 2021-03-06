<template>
  <div class="selectButton md-layout-item md-size-100">
    <multiselect
      v-model="value"
      :placeholder="label"
      label="row"
      track-by="row"
      :options="options"
      :searchable="false"
      :option-height="54"
      :custom-label="customLabel"
      :show-labels="false"
    >
      <template slot="option" slot-scope="props">
        <div class="option__desc">
          <span class="option__row"> {{ props.option.row }} </span>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect-fork";

export default {
  props: {
    label: {},
    "v-modal": {},
    name: {},
    id: {},
    currentValue: null,
    backgroundColor: {
      type: String,
      default: "black",
    },
    label: {
      type: String,
      default: "Select",
    },
    options: {
      default: () => [
        { row: "Pending", desc: "Last 5 days" },
        { row: "Complete", desc: "Last 15 days" },
      ],
      type: Array,
    },
    objKey: {},
    value: {},
    shadow: {},
    showKey: {},
    disabled: {},
    reset: {
      default: () => false,
    },
    startValue: {
      default: () => null,
    },
    color: {},
  },
  components: {
    Multiselect,
  },
  data: function () {
    return {
      selected: null,
      option: "",
      hasSetedStartedValued: false,
    };
  },
  methods: {
    style: function () {
      return `
        box-shadow: ${this.shadow} !important;
        background-color: ${this.backgroundColor} !important;
        color: ${this.color} !important
      `;
    },
    onSelect (option) {
      this.$emit("change", val);
    },
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
    },
    formatedOptions: function () {
      if (this.showKey) {
        return this.options.map((option) => option[this.showKey]);
      }
      return this.options;
    },
  },
  updated() {
    if (this.currentValue) {
      this.selected = this.currentValue;
    }
  },
  watch: {
    startValue: function (val) {
      if (this.selected == null) this.selected = val;
    },
    value: function (val) {
      this.$emit("change", this.value);
      if (this.reset) setTimeout(() => (this.selected = this.startValue), 200);
    },
  },
};
</script>
<style scoped>

.selectButton {
  color: #51515180 !important;
  cursor: pointer;
}
.dateFormWrapper {
  width: 170px;
  padding-left: 10px;
  margin-left: 0px;
  overflow: hidden;
  font-weight: 400;
}

</style>
<style>
.selectButton .multiselect__tags {
  background-color: #103a4f !important;
  box-shadow: none;
  border-radius: 20px;
  border: none !important;
  box-shadow: none !important;
}

.selectButton .multiselect__input {
  background: #ebe8e3;
}
.selectButton .multiselect__input,
.selectButton .multiselect__single {
  background: transparent;
  color: #ebe8e3;
}
.selectButton .multiselect__content-wrapper {
  background: #ebe8e3;
  margin-top: -10px !important;
  border-radius: 5px;
  padding: 0 5px;
  z-index: -1;
}
.selectButton .multiselect__placeholder {
  font-size: 16px;
  color: #ebe8e3;
  padding-left: 10px;
}
.selectButton .multiselect--active {
  border-radius: 20px;
}

.selectButton .multiselect__element {
  border-bottom: 1px solid white;
  border-top: 1px solid #d8d1c4;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}
.selectButton .multiselect__element:last-child {
  border-bottom: 0 solid white !important;
}
.selectButton .multiselect__option--highlight,
.selectButton .multiselect__option--selected,
.option__row {
  background-color: #ebe8e3;
  color: #00000099 !important;
}
.selectButton .multiselect__option--highlight,
.selectButton .multiselect__option--selected,
.option__rowSlot {
  background-color: #ebe8e3;
  color: #00000099 !important;
}
.selectButton .multiselect__option::after {
  display: none;
}

.selectButton .multiselect__content-wrapper {
  min-height: 75px !important;
  height: 75px !important;
  margin-top: -15px !important;
  z-index: -1;
  padding-top: 10px;
}
.selectButton .multiselect__option {
  padding: 5px !important;
  min-height: 17px !important;
}
.option__row {
  color: #00000099 !important;
}
.option__rowSlot {
  color: #103a4f !important;
}
.selectButton .multiselect__input {
  font-size: 14px;
}
.selectButton .multiselect__option--selected.multiselect__option--highlight {
  background: transparent;
}
.selectButton .underlay {
  background-color: black;
  opacity: 0.4;
  z-index: -1;
}
.selectButton .multiselect__tags {
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}
.selectButton .multiselect {
    z-index: 11;
}
</style>
