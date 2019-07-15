import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Home from './pages/Home';
import DetalheTarefa from './pages/DetalheTarefa';
import NotFound  from './pages/NotFound'


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
        tarefas: []
    },
    mutations:{
        

    },
    actions:{

    }

})


new Vue({
    el: '#app',
    router
});
