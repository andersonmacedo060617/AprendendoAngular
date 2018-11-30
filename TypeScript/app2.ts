import Carro, { qualquer_coisa } from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concecionaria'


/**--Criar carros */
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 2)
let carroC = new Carro('cerato', 4)


/** montar lista de carros */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)


/** Comprar o carro */
let cliente = new Pessoa('João', 'veloster')
concessionaria.monstrarListaDeCarros().map((carro: Carro)=>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

