import Carro from "./Carro";
import ConcessionariaInterface from "./ConcecionariaInterface"

export default class Concessionaria implements ConcessionariaInterface{
    
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public monstrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De Segunda a Sexta - Das 8:00 as 18:00 e sábado de 08:00 as 12:00'
    }
}