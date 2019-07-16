import Vue from 'vue';
import TabelaTarefas from '../components/TabelaTarefas';
import FormularioTarefa  from '../components/FormularioTarefa';


export default Vue.component("home", {
    template:
        /*html*/
        `
    <div>
        
        <h3>{{ user }}</h3>

        <h1>{{title}}</h1>

        <button @click="exibirFormulario = !exibirFormulario">{{tituloDoBotao}}</button>
        <img src="./img/tarefa.jpg" alt="" height="50" width="50">
        <!--Puxando la do componente a div que foi criada lá-->
        <br>
        <form-tarefa @voltar="exibirFormulario = false" v-if="exibirFormulario" ></form-tarefa>
        <tabela-tarefas @editar="exibirFormulario =true" v-else></tabela-tarefas>
        
    </div>
    `,

     //Componentes que foram criados
     components: {
        TabelaTarefas,
        FormularioTarefa,
        
    },
    data() {
        return {
            title: 'VueJs',
            exibirFormulario: false
        }
    },
    computed:{
        tituloDoBotao: function(){
            return this.exibirFormulario  ? 'Voltar' : 'Nova Tarefa';
        },
        user(){
            
            return `Bem-vindo(a): ${this.$store.state.user.nome}`
        }
    }

});
