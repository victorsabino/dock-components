<template>
  <modal
    @before-open="beforeOpen"
    @before-close="resetDialog"
    classes="v--modal confirmationDialog"
    height="auto"
    :name="name"
    :clickToClose="false"
  >
    <div :style="`width: ${width} !important`" class="confirmationDialogRoot">
      <div v-if="hasCloseIcon" class="close" @click="close">
        <md-icon style="color: #10434F !important">close</md-icon>
      </div>
      <div class="title">{{ title }}</div>
      <div class="text">{{ text }}</div>
      <div
        class="buttonWrapperConfirmationDialog"
        :style="`justify-content: ${justifyContent}`"
      >
        <Button
          :text="cancelButtonText"
          :bgcolor="buttonCancelStyle.bgcolor"
          :shadow="buttonCancelStyle.shadow"
          :border="buttonCancelStyle.border"
          :color="buttonCancelStyle.color"
          :icon="buttonCancelIcon"
          v-if="canCancel"
          :onClick="onCancel"
        />
        <Button
          :text="confirmButtonText"
          :bgcolor="buttonConfirmStyle.bgcolor"
          :shadow="buttonConfirmStyle.shadow"
          :border="buttonConfirmStyle.border"
          :color="buttonConfirmStyle.color"
          :width="confirmationWidth"
          :icon="buttonConfirmIcon"
          :onClick="onConfirm"
          :listButtons="confirmListButtons"
        />
      </div>
    </div>
  </modal>
</template>

<script>
import { Button } from "dock-components";

export default {
  components: {
    Button
  },
  data: () => ({
    text: "",
    title: "",
    confirmButtonText: "Ok",
    width: "500px",
    cancelButtonText: "Cancelar",
    justifyContent: "space-between",
    buttonConfirmStyle: {
      bgcolor: undefined,
      shadow: undefined,
      border: undefined,
      color: undefined
    },
    buttonCancelStyle: {
      bgcolor: "transparent",
      shadow: "transparent",
      border: "2px solid #10434F",
      color: "#10434F"
    },
    buttonConfirmIcon: "none",
    buttonCancelIcon: "none",
    canCancel: true,
    onCancel: () => {},
    onConfirm: () => {},
    hasCloseIcon: false
  }),
  props: {
    name: {
      default: "ConfirmationDialog",
      type: String
    },
    confirmationWidth: {
      default: "200px",
      type: String
    }
  },
  methods: {
    resetDialog() {
      this.text = "";
      this.title = "";
      this.cancelButtonText = "Cancelar";
      this.confirmButtonText = "Ok";
      this.confirmListButtons = null;
      this.width = "500px";
      this.justifyContent = "center";
      this.buttonConfirmStyle = {
        bgcolor: undefined,
        shadow: undefined,
        border: undefined,
        color: undefined
      };
      this.buttonCancelStyle = {
        bgcolor: "transparent",
        shadow: "transparent",
        border: "2px solid #10434F",
        color: "#10434F"
      };
      this.buttonConfirmIcon = "none";
      this.buttonCancelIcon = "none";
      this.hasCloseIcon = false;
      this.onCancel = () => {};
      this.onConfirm = () => {};
    },
    close() {
      this.$modal.hide(this.name);
    },
    beforeOpen(event) {
      if (event) {
        this.text = event.params.text || this.text;
        this.title = event.params.title || this.title;
        this.canCancel = event.params.canCancel || false;
        this.confirmListButtons = event.params.confirmListButtons || null;
        this.onCancel = event.params.onCancel || this.onCancel;
        this.hasCloseIcon = event.params.hasCloseIcon || this.hasCloseIcon;
        this.buttonCancelIcon =
          event.params.buttonCancelIcon || this.buttonCancelIcon;
        this.buttonConfirmIcon =
          event.params.buttonConfirmIcon || this.buttonConfirmIcon;
        this.buttonCancelStyle =
          event.params.buttonCancelStyle || this.buttonCancelStyle;
        this.buttonConfirmStyle =
          event.params.buttonConfirmStyle || this.buttonConfirmStyle;
        this.width = event.params.width || this.width;
        this.justifyContent =
          event.params.justifyContent || this.justifyContent;
        if (!this.confirmListButtons) {
          this.onConfirm = () => {
            this.close();
            event.params.onConfirm();
          };
        }

        this.onCancel = () => {
          this.close();
          event.params.onCancel();
        };
        this.confirmButtonText =
          event.params.confirmButtonText || this.confirmButtonText;
        this.cancelButtonText =
          event.params.cancelButtonText || this.cancelButtonText;
      }
    }
  }
};
</script>

<style scoped>
.confirmationDialogRoot {
  background-color: #f4f1eb;
  padding: 25px;
  z-index: 9999;
  overflow: visible;
}

.title {
  text-align: left;
  font-size: 24px;
  font-family: Open Sans, sans-serif;
  letter-spacing: 0;
  color: #10434f;
  opacity: 1;
  line-height: 27px;
}

.text {
  text-align: left;
  font-family: Open Sans;
  font-size: 14px;
  letter-spacing: 0.24px;
  color: #10434f;
  opacity: 1;
  margin-top: 24px;
  margin-bottom: 24px;
}

.buttonWrapperConfirmationDialog {
  display: flex;
  justify-content: space-between;
}

.buttonWrapperConfirmationDialog > div:first-child {
  margin-right: 25px;
}
.buttonWrapperConfirmationDialog > div:last-child {
}
.close {
  position: absolute;
  right: 0px;
  top: -44px;
  padding-top: 0px;
  display: flex;
  justify-content: center;
  padding-left: 1px;
  font-size: 25px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #f4f1eb;
  cursor: pointer;
}

.close i {
  font-size: 30px !important;
}
</style>
<style>
.confirmationDialog {
  overflow: visible !important;
  background-color: #f4f1eb !important;
  width: fit-content !important;
  margin-left: auto;
  margin-right: auto;
  left: 0 !important;
  margin-left: auto;
  margin-right: auto;
}
</style>
