import Vue from 'vue';
import TarefaService from '../service/TarefaService';

export default Vue.component("form-tarefa", {
    template: 
     /*html*/
    `

    <form>
        <h2>Nova Tarefa</h2>
        <input type="text" placeholder="Tipo da Tarefa" v-model="task.titulo">
        <input type="text" placeholder="Descrição da Tarefa" v-model="task.descricao">
        <input type="date" placeholder="Prazo conclusão" v-model="task.prazo">

        <button type="button" @click="cadastrar">Salvar Tarefa</button>
        <button type="button" @click="cancelar">Cancelar</button>
    </form>
    `,
    data(){
        return {
            task: {},
        }
    },
    methods: {
        cadastrar() {
            TarefaService.cadastrar(this.task);
            //Limpar campos apos salvar
            this.task = {};
            //Emissao do evento de filho p/ Pai
            this.$emit('voltar')

        },
        cancelar(){
            this.task = {};
            this.$emit('voltar')
        }


        
    }



});

