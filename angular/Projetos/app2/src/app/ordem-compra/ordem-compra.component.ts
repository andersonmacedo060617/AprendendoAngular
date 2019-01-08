import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco:string = ""
  public numero:string  = ""
  public complemento:string = ""
  public formaPagamento:string = ""

  //controles de validação dos campos
  public enderecoValido: boolean
  public numveroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean


  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco:string):void{
    this.endereco = endereco

    if(this.endereco.length > 3){
      this.enderecoValido = true
    }else{
      this.enderecoValido = false
    }
  }

  public atualizaNumero(numero:string):void{
    this.numero = numero
  }

  public atualizaComplemento(complemento:string):void{
    this.complemento = complemento
  }

  public atualizaFormaPagamento(formaPagamento:string):void{
    this.formaPagamento = formaPagamento
  }
}
