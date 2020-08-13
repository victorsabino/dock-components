<template>
  <div class="multiselect md-layout-item md-size-100">
    <multiselect
      :close-on-select="false"
      :clear-on-select="reset"
      v-model="value"
      placeholder="Select a date period"
      label="row"
      track-by="row"
      :options="options"
      :searchable="false"
      :option-height="104"
      :custom-label="customLabel"
      :show-labels="false"
    >
      <template slot="option" slot-scope="props">
        <div class="option__desc" v-if="!props.option.slot">
          <span class="option__row">
            {{ props.option.row }}
          </span>
        </div>
        <div class="option__desc" v-else>
          <span class="option__rowSlot">
            {{ props.option.row }}
          </span>
        </div>
        <div v-if="props.option.dateForm" class="dateFormWrapper">
          <DateForm row="from" right/>
          <DateForm row="to" right/>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect-fork";
import DateForm from "../DateForm/DateForm.vue";

export default {
  props: {
    label: {},
    name: {},
    id: {},
    currentValue: null,
    backgroundColor: {
      type: String,
      default: "black"
    },
    options: {
      default: () => [
        { row: "Last 5 days", desc: "Last 5 days" },
        { row: "Last 15 days", desc: "Last 15 days" },
        { row: "Last 30 days", desc: "Last 30 days" },
        { dateForm: true, row: "Period", slot:true}
      ],
      type: Array
    },
    objKey: {},
    value: {},
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
  components: {
    Multiselect,
    DateForm
  },
  data: function() {
    return {
      selected: null,
      value: null,
      option: "",
      hasSetedStartedValued: false
    };
  },
  methods: {
    style: function() {
      return `
        box-shadow: ${this.shadow} !important;
        background-color: ${this.backgroundColor} !important;
        color: ${this.color} !important
      `;
    },
    logProps: function (props) {
      console.log('props ', props)
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
    showLabel: function() {
      return !this.selected;
    },
    formatedOptions: function() {
      if (this.showKey) {
        return this.options.map(option => option[this.showKey]);
      }
      console.log("this.options ", this.options);
      return this.options;
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
    value: function(val) {
      if (this.startValue && !this.hasSetedStartedValued) {
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

<style>
.multiselect{
  color:#51515180 !important;
}
.multiselect .multiselect__tags {
  background-color: #ebe8e3;
  box-shadow: 0px 2px 1px #d8d1c4;
}
.multiselect .multiselect__input {
  background: #ebe8e3;
}
.multiselect__input,
.multiselect__single {
  background: transparent;
}
.multiselect__content-wrapper {
  background: #ebe8e3;
  margin-top: 3px;
  border-radius: 5px;
  padding: 0 5px;
}
.multiselect__element {
  border-bottom: 1px solid white;
  border-top: 1px solid #d8d1c4;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}
.multiselect__option--highlight,
.multiselect__option--selected,
.option__row {
  background-color: #ebe8e3;
  color: #00000099 !important;
}
.multiselect__option--highlight,
.multiselect__option--selected,
.option__rowSlot {
  background-color: #ebe8e3;
  color: #00000099 !important;
}
.multiselect__option::after {
  display: none;
}
.dateFormWrapper {
  width: 170px;
  padding-left: 10px;
  margin-left: 0px;
  overflow: hidden;
  font-weight: 400;
}
.multiselect__content-wrapper {
  min-height: 201px;
  margin-top:-2px;
  z-index: 2;
}
.multiselect__option {
  padding: 5px !important;
  min-height: 17px !important;
}
.option__row {
  color: #00000099 !important;
}
.option__rowSlot{
  color: #103A4F !important;
}
.multiselect__input {
  font-size: 14px;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: transparent;
}
</style>
