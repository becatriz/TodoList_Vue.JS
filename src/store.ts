import Vue from 'vue';
import Vuex from 'vuex';
import tarefas from './stores/Tarefas';
import alertas from './stores/alertas'

//Registro de Uso
Vue.use(Vuex);  //$store


export default new Vuex.Store({
    
    modules:{
        tarefas,
        alertas
    }
        

});