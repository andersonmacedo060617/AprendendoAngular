import DaoInterface from './DaoInterface'
import Concecionaria from './Concecionaria'

export default class ConcecionariaDao implements DaoInterface<Concecionaria>{
    nomeTabela: string = "tb_concecionaria";    
    
    inserir(object: Concecionaria): boolean {
        console.log("logica de insert")
        return true
    }
    atualizar(object: Concecionaria): boolean {
        console.log("logica de update")
        return true
    }
    remover(id: number) {
        console.log("logica de delete")
        return new Concecionaria('', [])
    }
    selecionar(object: any) {
        console.log("logica de select")
        return new Concecionaria('', [])
    }
    selecionarTodos(): [any] {
        console.log("logica de getAll")
        return [new Concecionaria('', [])]
    }


}