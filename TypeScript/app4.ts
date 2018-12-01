//import ConcecionariaDao from './ConcecionariaDao'
import Concecionaria from './Concecionaria'
//import PessoaDao from './PessoaDao';
import Pessoa from './Pessoa';
import Dao from './Dao';

//let dao : ConcecionariaDao = new ConcecionariaDao()
//let dao2 : PessoaDao = new PessoaDao()

// dao.inserir(concecionaria)
// dao2.atualizar(pessoa)

let dao3 : Dao<Concecionaria> = new Dao<Concecionaria>()
let dao4 : Dao<Pessoa> = new Dao<Pessoa>()

let concecionaria = new Concecionaria('',[])
let pessoa : Pessoa = new Pessoa("", "")


dao3.inserir(concecionaria)
dao4.remover(5)