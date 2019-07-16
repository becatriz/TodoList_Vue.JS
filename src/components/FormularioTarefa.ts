import Vue from 'vue';
import TarefaService from '../service/TarefaService';

export default Vue.component("form-tarefa", {
    template:
        /*html*/
        `

    <form>
        <h2>{{indiceEdicao != null ? "Editar Tarefa" : "Nova Tarefa"}}</h2>
        <input type="text" placeholder="Tipo da Tarefa" v-model="task.titulo">
        <input type="text" placeholder="Descrição da Tarefa" v-model="task.descricao">
        <input type="date" placeholder="Prazo conclusão" v-model="task.prazo">

        <button type="button" @click="salvar">Salvar Tarefa</button>
        <button type="button" @click="cancelar">Cancelar</button>
    </form>
    `,
    data() {
        return {
            //task: {},
        }
    },
    methods: {
        salvar() {
            
            this.$store.dispatch('salvarTarefa', this.task);
            this.cancelar();
        },


        cancelar() {
            this.task = {};
            this.$store.dispatch('limparEdicao');
            this.$emit('voltar');
        }



    },
    computed: {
        indiceEdicao() {
            return this.$store.state.indiceedicao;
        },
        task: {
            get() {
                return this.$store.getters.getTarefaEdicao;
            },
            


        }
    }



});

