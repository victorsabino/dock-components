
import Vue from "vue";
import VModal from "vue-js-modal";
import money from "v-money";
import VueTheMask from "vue-the-mask";
import VueMaterial from "vue-material";
import { render as VTLRender } from '@testing-library/vue';

//Cria render customizado com bibliotecas utilizadas pelo Vue no projeto.
export const dockRender = (component, options, callback) => {
    Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });

    Vue.use(money, { precision: 2, prefix: "R$ ", decimal: ",", thousands: "." });
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