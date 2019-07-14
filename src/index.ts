import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import DetalheTarefa from './pages/DetalheTarefa';

//Registro de Uso
Vue.use(VueRouter); //$router, e $route - rota atual

//Especificar rotas
const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/detalhe', 
            component: DetalheTarefa  
        }
    ]
});


new Vue({
    el: '#app',
    router
});
