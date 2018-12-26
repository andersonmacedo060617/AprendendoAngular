import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [PessoaService]
})
export class PainelComponent implements OnInit {
  
  @Input() public pessoa : Pessoa = new Pessoa()
  @Output() public lstPessoas : EventEmitter<Pessoa[]> = new EventEmitter()
  public ltpessoas : Pessoa[]

  constructor(private pessoaService:PessoaService) { }

  ngOnInit() {
    
  }

  public carregarPessoas():void{
    console.log("teste")
    this.pessoaService.findAllPessoas()
      .then((pessoas: Pessoa[])=>{
        this.ltpessoas = pessoas
        this.lstPessoas.emit(this.ltpessoas)
        console.log("teste")
      })
  }

  public dadosPessoa(pessoa: Pessoa):void{
    this.pessoa = pessoa    
  }

  

}
