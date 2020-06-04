import Vue from "vue";
import VModal from "vue-js-modal";
import "../public/MaterialIcons.css";
import "../public/style.css";
import "../public/Raleway.css";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import { configure, addDecorator } from "@storybook/vue";

Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
Vue.use(VueMaterial);

addDecorator(() => ({
  vuetify: VueMaterial,
  template: "<div><story/></div>"
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
console.log(loadStories());
configure(loadStories, module);
