
import Vue from "vue";
import VModal from "vue-js-modal";
import VueTheMask from "vue-the-mask";
import VueMaterial from "vue-material";
import { render as VTLRender } from '@testing-library/vue';


export const dockRender = (component, options, callback) => {
    Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
    Vue.use(VueMaterial);
    Vue.use(VueTheMask);
    
    return VTLRender(
      {
        render(h) {
          // wrap the component with a <div data-app="true"> node
          return h("div", { attrs: { "data-app": true } }, [h(component)]);
        }
      },
      options,
      callback
    );
  };