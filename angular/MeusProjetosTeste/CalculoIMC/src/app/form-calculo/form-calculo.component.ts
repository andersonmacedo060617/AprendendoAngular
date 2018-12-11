import { Component, OnInit, Output } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-calculo',
  templateUrl: './form-calculo.component.html',
  styleUrls: ['./form-calculo.component.css']
})
export class FormCalculoComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa()
  @Output() public dadosPessoa : EventEmitter<Pessoa> = new EventEmitter()

  constructor() { 
  }

  ngOnInit() {
  }

  public setNome(nome : Event):void{
    this.pessoa.nome = (<HTMLInputElement>nome.target).value
  }

  public setIdade(idade : Event):void{
    this.pessoa.idade = Number((<HTMLInputElement>idade.target).value)
  }

  public setPeso(peso : Event):void{
    this.pessoa.peso = Number((<HTMLInputElement>peso.target).value)
  }

  public setAltura(altura : Event):void{
    this.pessoa.altura = Number((<HTMLInputElement>altura.target).value)
  }

  public calculaImc():void{
    console.log(this.pessoa.valorImc())
    console.log(this.pessoa.analiseImc())
    this.dadosPessoa.emit(this.pessoa)
  }
}
