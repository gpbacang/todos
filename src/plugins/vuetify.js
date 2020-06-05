import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#009688',
        secondary: '#00BCD4',
        accent: '#FFC107',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
