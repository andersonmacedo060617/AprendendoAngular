import { Component, OnInit, Input } from '@angular/core';
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

  public tentativas : number = 3

  constructor() {
    this.atualizaRodada()
   }

  ngOnInit() {
  }

  public atualizaResponsta(resposta : Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta.length + "-> " + this.resposta)
  }

  public verificarResposta():void{
    
    if(this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase()){
  
      this.resposta = ""

      //trocar pergunta da rodada
      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      this.atualizaRodada()
    }else{
      this.tentativas--
      if(this.tentativas === -1){
        alert("Game Over")
  
      }
    }
  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada%this.frases.length]
  }
}
