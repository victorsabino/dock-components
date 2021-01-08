import Terminals from "./Terminals.vue";
import { withKnobs, array } from '@storybook/addon-knobs';

export default { title: "Components/Terminals", component:Terminals, decorators:[withKnobs] };

export const TerminalsStorie = () => ({
  components: { Terminals },
  template:
    '<Terminals :terminals="terminals" />',
    props: {  
			terminals: {
				default: [
					"Terminal 01 (carga)",
					"Terminal 02 (carga)",
					"Terminal 03 (carga)",
					"Terminal 04 (carga)",
					"Terminal 05 (carga)",
					"Terminal 06 (carga)",
					"Terminal 07 (carga)",
					"Terminal 08 (carga)",
					"Terminal 09 (carga)",
					"Terminal 10 (carga)",
					"Terminal 11 (carga)",
					"Terminal 12 (carga)",
					"Terminal 13 (carga)",
					"Terminal 14 (carga)",
					"Terminal 15 (carga)",
					"Terminal 16 (carga)",
					"Terminal 17 (carga)",
					"Terminal 18 (carga)",
					"Terminal 18 (carga)",
					"Terminal 19 (carga)",
					"Terminal 20 (carga)",
					"Terminal 21 (carga)",
					"Terminal 22 (carga)",
					"Terminal 23 (carga)",
					"Terminal 24 (carga)",
					"Terminal 25 (carga)",
					"Terminal 26 (carga)",
					"Terminal 27 (carga)",
				]
			}
		}
});

