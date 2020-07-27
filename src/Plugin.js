import VueMaterial from "vue-material";
import VueTheMask from "vue-the-mask";
import Logo from "./components/Logo/Logo.vue";
import Badge from "./components/Badge/Badge.vue";
import Modal from "./components/Modal/Modal.vue";
import VModal from "vue-js-modal";
import Status from "./components/Status/Status.vue";
import Button from "./components/Button/Button.vue";
import Select from "./components/Select/Select.vue";
import Toggle from "./components/Toggle/Toggle.vue";
import TopTab from "./components/TopTab/TopTab.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import MenuList from "./components/MenuList/MenuList.vue";
import DateInput from "./components/DateInput/DateInput.vue";
import ButtonIcon from "./components/ButtonIcon/ButtonIcon.vue";
import CustomInput from "./components/CustomInput/CustomInput.vue";
import CustomTextArea from "./components/CustomTextArea/CustomTextArea.vue";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog.vue";

module.exports = {
  install: function (Vue, options) {
    Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
    Vue.use(VueMaterial);
    Vue.use(VueTheMask);
    Vue.directive("decimal", {
      bind(el, binding, vnode) {
        let maxDecimal = parseInt(binding.value);
        let countDecimals = function(value) {
          if (Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
          return 0;
        };
        let handler = function(e) {
          let value = parseFloat(e.target.value);
          if (countDecimals(value) > maxDecimal) {
            e.target.value = value.toFixed(maxDecimal);
            vnode.elm.dispatchEvent(new CustomEvent("input"));
          }
        };
        el.addEventListener("input", handler);
      }
    });

    Vue.component('dock-components', Logo);
    Vue.component('dock-components', Modal);
    Vue.component('dock-components', Badge);
    Vue.component('dock-components', Select);
    Vue.component('dock-components', Status);
    Vue.component('dock-components', Button);
    Vue.component('dock-components', Toggle);
    Vue.component('dock-components', TopTab);
    Vue.component('dock-components', MenuList);
    Vue.component('dock-components', Checkbox);
    Vue.component('dock-components', DateInput);
    Vue.component('dock-components', ButtonIcon);
    Vue.component('dock-components', CustomInput);
    Vue.component('dock-components', CustomTextArea);
    Vue.component('dock-components', ConfirmationDialog);
  }
};