import Home from './pages/Home';
import DetalheTarefa from './pages/DetalheTarefa';
import NotFound  from './pages/NotFound';
import Vue from 'vue';
import VueRouter from 'vue-router';

//Registro de Uso
Vue.use(VueRouter); //$router, e $route - rota atual

//Especificar rotas
export default new VueRouter({
    mode: 'history',
    routes: [
        {   
            
            path: '/', 
            component: Home,
            meta:{
                title: 'Home'
            }
            
        },
        {
            path: '/detalhe', 
            component: DetalheTarefa ,
            name: 'detalhe',
            props: true,
            meta:{
                title: 'Detalhe'
            }
        },
        {   

            path: '*', 
            component: NotFound,
            meta:{
                title: '404'
            }
        }
    ]
});