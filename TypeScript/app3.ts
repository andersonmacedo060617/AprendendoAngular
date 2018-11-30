import Carro from './Carro'
import Moto from './Moto'
import Concecionaria from './Concecionaria'

let carro = new Carro('veloster', 3)

let moto = new Moto()

moto.acelerar()
carro.acelerar()

console.log(moto)
console.log(carro)

let concecionaria = new Concecionaria('', [])

console.log(concecionaria.fornecerHorarioDeFuncionamento())
