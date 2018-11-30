import ConcecionariaDao from './ConcecionariaDao'
import Concecionaria from './Concecionaria'

let dao : ConcecionariaDao = new ConcecionariaDao()
let concecionaria = new Concecionaria('',[])

dao.inserir(concecionaria)
