<template>
  <modal
    :classes="`v--modal customModal ` + classes"
    :width="width"
    :name="name"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    @opened="event => openedWithOverlayCalc(event)"
    height="auto"
    :clickToClose="clickToClose"
    :scrollable="scrollable"
  >
    <div class="modalWrapper">
      <div class="modalContainer">
        <div class="close" @click="close" v-if="!hideClose">
          <md-icon class="iconColor" :style="`color: ${closeColor} !important`">close</md-icon>
        </div>
        <div>
          <div v-if="hasLogo" class="logo">
            <Logo :logoImg="logoFull"/>
          </div>
        </div>
        <slot name="content" />
      </div>
    </div>
  </modal>
</template>
<script>
import Logo from "../Logo/Logo.vue";
import logoImg from "@/assets/logoFull.svg";

export default {
  props: {
    classes: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "customModal"
    },
    close: {
      type: Function,
      default: () => {}
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    beforeOpen: {
      type: Function,
      default: () => {}
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: () => {}
    },
    hasLogo: {
      type: Boolean,
      default: true
    },
    logoFull: {
      default: logoImg
    },
    closeColor: {
      type: String,
      default: "#10434F"
    },
    opened: {
      type: Function,
      default: () => {}
    },
    scrollable: {
      type: Boolean,
      default: true
    }
  },
  components: { Logo },
  methods: {
    openedWithOverlayCalc(event) {
      this.opened(event);
      const container = document.querySelector(`[data-modal="${this.name}"]`).parentElement;
      const modalHeight = container.scrollHeight;
      const innerHeight = window.innerHeight;

      if(modalHeight > innerHeight) {
        container.children[0].setAttribute('style', `height: ${modalHeight+100}px !important`)
      }
    }
  },
};
</script>
<style scoped>
.SignupBody {
  display: flex;
  height: 100%;
}
.modalContainer {
  overflow: visible;
  background-color: #f4f1eb !important;
  border-radius: 4px 4px 4px 4px;
  color: #f4f1eb;
  height: auto;
  top: 30px;
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
.v--modal-box {
  background-color: #f4f1eb;
  border-radius: 4px;
  height: auto !important;
  min-height: 300px;
  top: 42px !important;
  overflow: visible !important;
  top: 150px !important;
  background-color: transparent !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: auto;
  margin-right: auto;
  left: 0 !important;
}

</style>
<style>
.customModal {
  overflow: visible;
  top: 150px;
}
</style>
