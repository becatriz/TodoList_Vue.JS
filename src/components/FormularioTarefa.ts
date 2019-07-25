import Vue from 'vue';


export default Vue.component("form-tarefa", {
    template:
        /*html*/
        `

    <v-form>
        <v-container grid-list-md>
        <h2>{{indiceEdicao != null ? "Editar Tarefa" : "Nova Tarefa"}}</h2>
            <v-layout row wrap>
                <v-flex xs12 sm4>
                
                    <v-text-field
                    
                    filled
                    name="titulo"
                    v-validate="'required'"
                    :error-messages= "errors.collect('titulo')"
                    type="text"
                    v-model="task.titulo"
                    label="Tipo da Tarefa"
                    hint="Ex: Estudar"
                    
                    >
                  
                    </v-text-field>
                </v-flex>
                <v-flex xs12 sm4>
                    <v-text-field
                    name="descricao"
                    v-validate="'required'"
                    :error-messages= "errors.collect('descricao')"
                    filled
                    type="text" 
                    label="Descrição da Tarefa"
                    Descrição da Tarefa
                    v-model="task.descricao"></v-text-field>
                </v-flex>
                <v-flex xs12 sm4>
                <v-menu
                    v-model="datepicker"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
              >
                <template v-slot:activator="{ on }">
                
                  <v-text-field
                    filled
                    type="date"
                    name="prazo"
                    v-validate="'required'"
                    :error-messages= "errors.collect('prazo')"
                    v-model="task.prazo"
                    label="Prazo da Tarefa"
                    readonly
                    v-on="on"
                  >
                  </v-text-field>
                </template>
                <v-date-picker 
                v-model="task.prazo" 
                @input="datepicker = false">
                </v-date-picker>
              </v-menu>
             </v-flex>
            </v-layout>
        </v-container>
        <v-btn small color="primary" type="button" @click="salvar">Salvar</v-btn>
        <v-btn small color="primary" type="button" @click="cancelar">Cancelar</v-btn>
    </v-form>
    `,
    data() {
        return {
            datepicker: false,
            carregando: false
        }
    },
    methods: {
        async salvar() {
           if( await this.$validator.validate()){
            this.carregando = false;
            this.$store.dispatch('tarefas/salvarTarefa', this.task);
            this.$store.dispatch('alertas/showSuccessSnackbar',  'Tarefa salva com sucesso') 
            
           
            this.cancelar();
         } else{
                this.carregando = false;
                this.$store.dispatch('alertas/showErrosSnackbar', 'Preencha todos os campos') 
                
            }
         
         
        },

        cancelar() {
            this.task = {};
            this.$store.dispatch('tarefas/limparEdicao');
            this.$emit('voltar');
        }



    },
    computed: {
        indiceEdicao() {
            return this.$store.state.tarefas.indiceedicao;
        },
        task: {
            get() {
                return this.$store.getters['tarefas/getTarefaEdicao'];
                
            },
            set(){

            }
            


        }
    }



});

