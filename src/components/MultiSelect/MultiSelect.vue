<template>
  <div class="multiselect md-layout-item md-size-100">
    <multiselectfork
      v-model="value"
      :placeholder="placeholder"
      label="row"
      track-by="row"
      :options="options"
      :searchable="false"
      :option-height="104"
      openDirection="below"
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
        <div v-if="props.option.dateForm" class="dateFormWrapper" @click.stop="() => {}">
          <DateForm row="from" right @input="e => emitInput(e, 'from')"/>
          <DateForm row="to" right @input="e => emitInput(e, 'to')"/>
        </div>
      </template>
    </multiselectfork>
  </div>
</template>

<script>
import Multiselectfork from "vue-multiselect-fork";
import DateForm from "../DateForm/DateForm.vue";

export default {
  props: {
    label: {},
    name: {},
    id: {},
    backgroundColor: {
      type: String,
      default: "black"
    },
    options: {
      default: () => [],
      type: Array
    },
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
    placeholder: {
      type: String,
      default: ""
    },
    color: {}
  },
  components: {
    Multiselectfork,
    DateForm
  },
  data: function() {
    return {
      selected: null,
      value: null,
      option: "",
      hasSetedStartedValued: false,
      timer: undefined
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
    emitInput(payload, row){
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
      this.$emit(row, payload);
      }, 500);
    }
  },
  beforeMount() {
    if (!this.label) {
      this.options[0];
    }
    if (this.startValue) {
      this.selected = this.startValue;
    }
  },
  computed: {
    showLabel: function() {
      return !this.selected;
    },
  },
  watch: {
    startValue: function(val) {
      if (this.selected == null) this.selected = val;
    },
    value: function(val) {
      this.$emit("change", val);
    }
  }
};
</script>

<style>
.multiselect{
  color:#51515180 !important;
  cursor: pointer;
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
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
}
.multiselect__element:last-child {
  border-bottom: none;
  border-top: none;
  font-size: 16px;
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
  box-shadow: 0 2px 1px #d8d1c4;
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
  font-size: 16px;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: transparent;
}
.multiselect--active{
  z-index:999 !important;
}
ul li:nth-last-child(3){
  border-bottom: none !important;
}
</style>
