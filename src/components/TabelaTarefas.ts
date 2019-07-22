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
         <v-simple-table height="300px">
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

            <v-tooltip top>
                 <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" icon @click='visualizarTarefa(i)' color="blue"  >
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                </template> 
                    <span>Detalhe Tarefa</span>
            </v-tooltip >
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" icon @click='editar(i)' color="green">
                    <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                    <span>Editar Tarefa</span>
            </v-tooltip >
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn  text v-on="on"  icon @click='remover(i)'color="red" >
                    <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
                    <span>Excluir Tarefa</span>
            </v-tooltip >     
                 </td>
             </tr>
         </tbody>
     </v-simple-table> 
         
         `,
    //Nao é mais um objeto data mas uma funçao que retorna um objeto
    data() {
        return {
        
            FormatterUtil: FormatterUtil

        }
    },

    methods: {
      
        //alteracao do input de false p true
        marcarTarefa() {
            TarefaService.atualizarLista(this.tasks);

        },
        visualizarTarefa(i: number){
            //Ir pagina acoes detalhes
            this.$router.push({  name: 'detalhe',params:{ tarefaselecionada: this.tasks[i]}})
        },
        editar(i: number){
            //Disparar a acao "editar" no vuex
            this.$store.dispatch('editar',i);
            //Emite evento para que a Home (pai)    
            this.$emit('editar');
        },
        remover(i: number){
           if(confirm("Tem certeza que deseja remover?")){
               this.$store.dispatch('remover',i);
           }
        }

    },

    mounted() {
        //this.buscarTarefas();
        console.log("Chamou o monted da tabela");
        this.$store.dispatch('carregarTarefas');

    },
    computed:{
        tasks: function(){
           return this.$store.state.tarefas;
        }
    }
});



