// eslint-disable-next-line no-console
export default {
  name: 'welcome',

  props: {
    showApp: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      main: {
        padding: 15,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
        backgroundColor: '#ffffff',
      },

      logo: {
        width: 200,
      },

      link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
      },

      code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
      },

      note: {
        opacity: 0.5,
      },
    };
  },

  template: `
    <div :style="main">
      <h1>Welcome to dockmarket storybook</h1>
      <p>
        Documentação do projeto: listagem de todos os components separados por categoria e modos de uso.
      </p>
      <p>
        O projeto é dividido em <code :style="code">Atoms/Molecules/Organisms/Templates</code>
      </p>
      
    </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};
