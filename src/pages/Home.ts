import Vue from 'vue';
import TabelaTarefas from '../components/TabelaTarefas';
import FormularioTarefa from '../components/FormularioTarefa';




export default Vue.component("home", {
    template:
        /*html*/
        `
    <div>
    
    <v-container>
        <v-layout row wrap justify-space-between class="my-3">
            <h1>{{title}}</h1>

            <v-btn 
                color="primary" 
                @click="exibirFormulario = !exibirFormulario"
                fab
                dark
                >
                <v-icon>
                    {{exibirFormulario ?  'mdi-arrow-left' : 'mdi-plus'}}
                </v-icon>
            </v-btn>
        </v-layout>
        <form-tarefa @voltar="exibirFormulario = false" v-if="exibirFormulario" ></form-tarefa>
        <tabela-tarefas @editar="exibirFormulario =true" v-else></tabela-tarefas> 
    </v-container>
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
    computed: {
        tituloDoBotao: function () {
            return this.exibirFormulario ? 'Voltar' : 'Nova Tarefa';
        },
        
    }

    

});

