

import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);  


export default new Vuetify({
    icons: {
        iconfont: 'mdi', 
      },
      theme:{
        themes:{
          light:{
            //primary:  colors.purplelighten5,
            primary: '#004D40',
            secondary: '#00BFA5',
            anchor: '#A7FFEB',
          }
        }
      }
});