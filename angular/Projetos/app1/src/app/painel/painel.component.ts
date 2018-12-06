import { Component, OnInit } from '@angular/core';
import Frase from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao : string = "Traduza a frase:"
  public resposta: string = ""

  public rodada : number = 0
  public rodadaFrase: Frase
  public progresso : number = 0

  constructor() {
    this.atualizaRodada()
    console.log(this.rodadaFrase)
   }

  ngOnInit() {
  }

  public atualizaResponsta(resposta : Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta.length + "-> " + this.resposta)
  }

  public verificarResposta():void{

    if(this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase()){
      alert("A tradução está correta")


      this.resposta = ""

      //trocar pergunta da rodada
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      this.atualizaRodada()
    }else{
      alert("A tradução está errada")
    }
  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada%this.frases.length]
  }
}
