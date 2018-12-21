export class  Pessoa {
    public id: number
    public nome :string
    public idade :number
    public peso : number
    public altura : number
    public sexoPessoa: ESexo

    constructor(nome:string = ""){
        this.nome = nome
    }
    
    valorImc() : number {
        let vlr = this.peso / (this.altura * this.altura)
        if(isNaN(vlr)){
            return null
        }else{
            return Number(vlr.toFixed(2))
        }
    }

    public analiseImc():string{
        let vlrImc : number = this.valorImc()
        if(vlrImc < 17 && vlrImc != null){
            return 'Muito abaixo do peso'
        }else if(vlrImc >=17 && vlrImc <18.5){
            return 'Abaixo do peso'   
        }else if(vlrImc >=18.5 && vlrImc <25){
            return 'Peso normal'   
        }else if(vlrImc >=25 && vlrImc <30){
            return 'Acima do peso'   
        }else if(vlrImc >=30 && vlrImc <35){
            return 'Obesidade Grau I'   
        }else if(vlrImc >=35 && vlrImc <40){
            return 'Obesidade Grau II'   
        }else if(vlrImc > 40){
            return 'Obesidade Grau III'   
        }else{
            return ""
        }
    }



}

enum ESexo{
    Masculino, Feminino
}