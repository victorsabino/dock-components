import Button from "./components/Button/Button.vue";
import Badge from "./components/Badge/Badge.vue";
import ButtonIcon from "./components/ButtonIcon/ButtonIcon.vue";
import MenuList from "./components/MenuList/MenuList.vue";
import Select from "./components/Select/Select.vue";
import Status from "./components/Status/Status.vue";
import Toggle from "./components/Toggle/Toggle.vue";
import TopTab from "./components/TopTab/TopTab.vue";
import CustomTextArea from "./components/CustomTextArea/CustomTextArea.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import Logo from "./components/Logo/Logo.vue";

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-clock', Button);
  }
};