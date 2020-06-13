<template>
  <div class="buttonRoot">
    <div class="button mainButton" :style="style()" @click="click">
      <md-icon v-if="icon !== 'none' || !icon" :style="iconStyle">
        {{ icon }}
      </md-icon>
      <span> {{ text }} </span>
    </div>
    <div
      class="buttonOverlay"
      @click="closeListing()"
      v-if="isListButtonsOpen"
    />
    <div class="listButton" v-if="isListButtonsOpen">
      <div
        class="button"
        :style="style(button)"
        @click="closeListing(button.onClick)"
        v-for="(button, index) in listButtons"
        :key="index"
      >
        <md-icon v-if="icon !== 'none' || !icon" :style="iconStyle">
          {{ button.icon }}
        </md-icon>
        <span> {{ button.text }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListButtonsOpen: false
    };
  },
  props: {
    text: {},
    bgcolor: {},
    fontSize: {},
    width: {},
    shadow: {},
    color: {},
    fontWeight: {},
    borderRadius: {},
    paddingLeft: {},
    textAlign: {},
    disabled: {},
    hasOverlay: {
      default: true,
      type: Boolean
    },
    border: {
      default: ""
    },
    onClick: {
      default: () => () => {}
    },
    icon: {
      default: "add_circle_outline"
    },
    listButtons: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    click: function() {
      this.onClick();
      if (this.hasListButtons) {
        this.toggleListButtons();
      }
    },
    closeListing: function(action) {
      setTimeout(() => this.toggleListButtons(), 100);
      if (action) action();
    },
    toggleListButtons: function() {
      this.isListButtonsOpen = !this.isListButtonsOpen;
    },
    style() {
      let disabled = "";
      if (this.disabled) {
        disabled = ' background-color: #7f7f7f !important; box-shadow: 0 3px 1px #959796 !important; pointer-events: none !important';
        console.log('hello ', disabled)
      }
      return ` background-color: ${this.bgcolor};
          box-shadow: 0px 3px 1px ${this.shadow} !important;
          color: ${this.color};
          width: ${this.width} !important;
          font-size: ${this.fontSize} !important;
          font-weight: ${this.fontWeight} !important;
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding-left: ${this.paddingLeft};
          text-align: ${this.textAlign}; ` + disabled;
    }
  },
  computed: {
    hasListButtons() {
      return this.listButtons && this.listButtons.length > 0;
    },
    iconStyle() {
      if (!this.color) return `color: #F4F1EB !important`;
      return `color: ${this.color} !important;`;
    }
  }
};
</script>

<style scoped>
.button {
  height: 42px !important;
  min-width: 166px;
  width: fit-content;
  font-size: 20px;
  font-weight: 500;
  font-family: Open Sans, sans-serif;
  padding-top: 10px;
  background: #4eb9b1 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 1px #388e88;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  z-index: 2;
}
.mainButton {
  z-index: -1 !important;
  position: relative;
}
.buttonOverlay {
  background-color: #10434f80;
  z-index: 1000 !important;
  width: 100%;
  height: 100%;
  margin-top: 0 !important;
  position: fixed;
  left: 0;
  top: 0;
}
.listButton {
  z-index: 1333 !important;
  position: absolute;
  margin-top: 0 !important;
}
.buttonRoot div {
  margin-top: 10px;
  z-index: 2 !important;
}
.buttonRoot {
  z-index: 3;
}
.md-icon {
  margin-top: -2px;
}
</style>
