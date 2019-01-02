export class Endereco{
    public bairro: string
    public cep: string
    public complemento: string 
    public gia: string
    public ibge: string
    public localidade: string 
    public logradouro: string 
    public uf: string
    public numero:string

    constructor(){
        this.logradouro = ""
        this.bairro = ""
        this.cep = ""
        this.complemento = ""
        this.gia = ""
        this.ibge = ""
        this.localidade = ""
        this.logradouro = ""
        this.numero = ""
        this.uf = ""
    }
}