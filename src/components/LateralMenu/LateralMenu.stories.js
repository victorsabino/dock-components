import LateralMenu from './LateralMenu.vue';
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: 'Components/LateralMenu', component: LateralMenu, decorators: [withKnobs] };

export const LateralMenuBasic = () => ({
  components: { LateralMenu },
  template: '<LateralMenu :itens="itens" />',
  props: {
    itens: {
        default: array("Itens", [{icon:"add", name: 'Nova Cotação', quantity: 3},{icon:"arrow_forward", name: 'Cotações', quantity: 50},{icon:"arrow_back",name: 'Pedidos Recebidos'} ,{icon:"today",name: 'Aprovados', quantity: 3},{icon:"insert_drive_file",name: 'Histórico', quantity: 0}],
      )
    },
  }
});