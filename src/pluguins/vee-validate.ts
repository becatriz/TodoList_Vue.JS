import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
    locale: 'ptbr',
    dictionary : {
            ptbr:{
                messages:{
                    required:  () => 'O campo é obrigatorio '
                }
            }
    }
    
});

