import Tarefa from "../model/Tarefa";

export default class TarefaService {

    static buscarTodos(): Array<Tarefa> {
        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        if (!tarefas) {
            return [];
        } else {
            return tarefas;
        }
    }

    static cadastrar(tarefa: Tarefa) {
        //Para trazer o parametro boolean 
        if(!tarefa.finalizado){
            tarefa.finalizado = false;

        }

        let cadastrados = TarefaService.buscarTodos();
        cadastrados.push(tarefa);
        localStorage.setItem("tarefas", JSON.stringify(cadastrados));

    }

    static atualizarLista(listatarefa: Array<Tarefa>){
        localStorage.setItem("tarefas", JSON.stringify(listatarefa));

    }

  

}