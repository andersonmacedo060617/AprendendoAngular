import DaoInterface from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface<Pessoa>{
    
    nomeTabela: string = 'tb_pessoa';    
    
    inserir(object: Pessoa): boolean {
        console.log("logica de insert")
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log("logica de alterar")
        return true
    }
    remover(id: number): Pessoa {
        console.log("logica remover")
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa {
        console.log("logica select")
        return new Pessoa("", "")
    }
    selecionarTodos(): [Pessoa] {
        console.log("logica selectAll")
        return [new Pessoa("", "")]
    }


}