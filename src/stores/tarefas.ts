import {Module} from 'vuex';
import TarefaService from '../service/TarefaService';



//data - state
//methods - actions
const module: Module<any, any> = {
    namespaced: true,
    state:{
        //alterar nome para lista
        tarefas: [],
        indiceedicao: null,
    },
    mutations:{
        mutationTarefa(state, lista){
            state.tarefas = lista;
        },
        mutationIndiceEdicao(state, index){
            state.indiceedicao = index;
        },
        mutationSalvarTarefa(state, task){
            state.tarefas[state.indiceedicao] = task;
        },
        mutationCadastraTarefa(state, task){
            state.tarefas.push(task);
        },
        mutationRemoverTarefa(state, index ){
            state.tarefas.splice(index, 1);

        },
    
    },
    actions:{
        async carregarTarefas(context){
            let tarefas = await TarefaService.buscarTodos();
            context.commit('mutationTarefa', tarefas);
        },
        editar(context, index){
            context.commit('mutationIndiceEdicao', index);
        },
        limparEdicao(context){
            context.commit('mutationIndiceEdicao', null);
        },
        salvarTarefa(context, task){
            if(context.state.indiceedicao ==  null){
                context.commit('mutationCadastraTarefa', task);            
            }else{  
                context.commit('mutationSalvarTarefa',task);
            }
            TarefaService.atualizarLista(context.state.tarefas);
           
        },
        remover(context,index){
            context.commit('mutationRemoverTarefa', index);
            TarefaService.atualizarLista(context.state.tarefas);
        },
    

    },
    getters:{
        getTarefaEdicao(state){
            if (state.indiceedicao != null){
                return state.tarefas[state.indiceedicao]
            }else{
                return {}
            }
        }
    }
}
//Exporta o objeto que voi
export default module;