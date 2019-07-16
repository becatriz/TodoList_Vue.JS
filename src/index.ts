import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Home from './pages/Home';
import DetalheTarefa from './pages/DetalheTarefa';
import NotFound  from './pages/NotFound'
import TarefaService from './service/TarefaService';


//Registro de Uso
Vue.use(VueRouter); //$router, e $route - rota atual
Vue.use(Vuex);  //$store

//Especificar rotas
const router = new VueRouter({
    mode: 'history',
    routes: [
        {   
            
            path: '/', 
            component: Home
            
        },
        {
            path: '/detalhe', 
            component: DetalheTarefa ,
            name: 'detalhe',
            props: true
        },
        {   

            path: '*', 
            component: NotFound
        }
    ]
});

const store = new Vuex.Store({
    //data - state
    //methods - actions
    state:{
        tarefas: [],
        user:{
            nome: 'Rebeca Lopes',
            email: 'becatriz7@gmail.com',
            level: 'adm-da-porra-toda'
        },
        token: '56456c4sc4w8c48w4864acc'
    },
    mutations:{
        mutationTarefa(state, lista){
            state.tarefas = lista
        }

    },
    actions:{
        async carregarTarefas(context){
            let tarefas = await TarefaService.buscarTodos();
            context.commit('mutationTarefa', tarefas);
        }
    }

})


new Vue({
    el: '#app',
    router,
    store
});
