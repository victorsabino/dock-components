import money from "v-money";
import VModal from "vue-js-modal";
import VueMaterial from "vue-material";
import VueTheMask from "vue-the-mask";
import Card from "./components/Card/Card.vue";
import Rain from "./components/Rain/Rain.vue";
import Wind from "./components/Wind/Wind.vue";
import Logo from "./components/Logo/Logo.vue";
import Money from "./components/Money/Money.vue";
import Badge from "./components/Badge/Badge.vue";
import Modal from "./components/Modal/Modal.vue";
import Status from "./components/Status/Status.vue";
import Button from "./components/Button/Button.vue";
import Select from "./components/Select/Select.vue";
import Toggle from "./components/Toggle/Toggle.vue";
import TopTab from "./components/TopTab/TopTab.vue";
import Loading from "./components/Loading/Loading.vue";
import Weather from "./components/Weather/Weather.vue";
import Ellipsis from "./components/Ellipsis/Ellipsis.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import Timeline from "./components/Timeline/Timeline.vue";
import MenuList from "./components/MenuList/MenuList.vue";
import DateForm from "./components/DateForm/DateForm.vue";
import Moisture from "./components/Moisture/Moisture.vue";
import TimeInput from "./components/TimeInput/TimeInput.vue";
import DateInput from "./components/DateInput/DateInput.vue";
import Terminals from "./components/Terminals/Terminals.vue";
import ButtonIcon from "./components/ButtonIcon/ButtonIcon.vue";
import Pagination from "./components/Pagination/Pagination.vue";
import InputLabel from "./components/InputLabel/InputLabel.vue";
import MultiSelect from "./components/MultiSelect/MultiSelect.vue";
import Temperature from "./components/Temperature/Temperature.vue";
import LateralMenu from "./components/LateralMenu/LateralMenu.vue";
import CustomInput from "./components/CustomInput/CustomInput.vue";
import SelectButton from "./components/SelectButton/SelectButton.vue";
import EditableField from "./components/EditableField/EditableField.vue";
import CustomTextArea from "./components/CustomTextArea/CustomTextArea.vue";
import DisplayInformation from "./components/DisplayInformation/DisplayInformation.vue";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog.vue";

module.exports = {
  install: function (Vue, options) {
    Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
    Vue.use(VueMaterial);
    Vue.use(VueTheMask);
    Vue.use(money, { precision: 2, prefix: "R$ ", decimal: ",", thousands: "." });

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
    Vue.component('dock-components', Card);
    Vue.component('dock-components', Rain);
    Vue.component('dock-components', Wind);
    Vue.component('dock-components', Modal);
    Vue.component('dock-components', Badge);
    Vue.component('dock-components', Money);
    Vue.component('dock-components', Select);
    Vue.component('dock-components', Status);
    Vue.component('dock-components', Button);
    Vue.component('dock-components', Toggle);
    Vue.component('dock-components', TopTab);
    Vue.component('dock-components', Loading);
    Vue.component('dock-components', Weather);
    Vue.component('dock-components', Ellipsis);
    Vue.component('dock-components', Moisture);
    Vue.component('dock-components', MenuList);
    Vue.component('dock-components', Checkbox);
    Vue.component('dock-components', Timeline);
    Vue.component('dock-components', TimeInput);
    Vue.component('dock-components', Terminals);
    Vue.component('dock-components', DateInput);
    Vue.component('dock-components', DateForm);
    Vue.component('dock-components', ButtonIcon);
    Vue.component('dock-components', Pagination);
    Vue.component('dock-components', InputLabel);
    Vue.component('dock-components', LateralMenu);
    Vue.component('dock-components', CustomInput);
    Vue.component('dock-components', MultiSelect);
    Vue.component('dock-components', Temperature);
    Vue.component('dock-components', SelectButton);
    Vue.component('dock-components', EditableField);
    Vue.component('dock-components', CustomTextArea);
    Vue.component('dock-components', DisplayInformation);
    Vue.component('dock-components', ConfirmationDialog);
  }
};