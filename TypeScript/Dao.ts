import DaoInterface from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = ""
    
    inserir(object: T): boolean {
        console.log("Logica inserir")
        return true
    }
    atualizar(object: T): boolean {
        console.log("Logica atualizar")
        return true
    }
    remover(id: number): T {
        console.log("Logica delete")
        return Object()
    }
    selecionar(id: number): T {
        console.log("Logica Selecionar")
        return Object()
    }
    selecionarTodos(): [T] {
        console.log("Logica GetAll")
        return [Object()]
    }


}