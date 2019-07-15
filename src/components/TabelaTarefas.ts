import Vue from 'vue';
import TarefaService from '../service/TarefaService';
import FormatterUtil from '../util/FormatterUtil'


//Criação do componente
//Primeiro parametro string que é a tag no html
//Segundo paramtro é o objeto de configuração
export default Vue.component("tabela-tarefas", {
    template:
        /*html*/
        `
         <table>
         <thead>
             <th>Tipo da Tarefa</th>
             <th>Descricão</th>
             <th>Prazo</th>
             <th>Finalizado</th>
             <th>Ações</th>
         </thead>
         <tbody>
             <tr v-for="(tarefa, i) in tasks">
                 <td>{{tarefa.titulo}}</td>
                 <td>{{tarefa.descricao}}</td>
                 <td>{{FormatterUtil.formatarData(tarefa.prazo)}}</td>
                 <td>
                     <!--true-value="true" e false-value="false"-->
                     <input type="checkbox" v-model="tarefa.finalizado" @change="marcarTarefa">
                    {{tarefa.finalizado ? "Sim": "Não" }}
                 </td>
                 <td>
                 <!-- <router-link to="/detalhe"><a>Detalhe</a></router-link>-->
                    <a @click='visualizarTarefa(i)'>Detalhe</a>
                 </td>
             </tr>
         </tbody>
     </table> 
         
         `,
    //Nao é mais um objeto data mas uma funçao que retorna um objeto
    data() {
        return {
            tasks: [],
            FormatterUtil: FormatterUtil

        }
    },

    methods: {
        buscarTarefas() {
            this.tasks = TarefaService.buscarTodos();
        },
        //alteracao do input de false p true
        marcarTarefa() {
            TarefaService.atualizarLista(this.tasks);

        },
        visualizarTarefa(i: number){
            //Ir pagina acoes detalhes
            this.$router.push({  name: 'detalhe',params:{ tarefaselecionada: this.tasks[i]}})
        }

    },

    mounted() {
        this.buscarTarefas();

    }
});



