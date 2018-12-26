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

  public ltpessoas : Pessoa[]

  constructor(private pessoaService:PessoaService) { }

  ngOnInit() {
    this.pessoaService.findAllPessoas()
      .then((pessoas: Pessoa[])=>{
        this.ltpessoas = pessoas
    })
  }


  public dadosPessoa(pessoa: Pessoa):void{
    this.ltpessoas.push(pessoa)
  }

  

}
