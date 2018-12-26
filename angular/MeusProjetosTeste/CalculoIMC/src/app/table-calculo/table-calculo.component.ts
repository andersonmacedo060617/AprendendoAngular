import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-table-calculo',
  templateUrl: './table-calculo.component.html',
  styleUrls: ['./table-calculo.component.css'],
  providers: [PessoaService]
})
export class TableCalculoComponent implements OnInit {

  @Input() public pessoa : Pessoa = new Pessoa()
  @Input() public ltpessoas1 : Pessoa[]

  public pessoas : Pessoa[]
  constructor(private pessoaService : PessoaService) { }

  ngOnInit() {
    this.pessoaService.findAllPessoas()
      .then((pessoas: Pessoa[])=>{
        this.pessoas = pessoas
      })
  }

  public lstPessoas(ltpessoas : Pessoa[]):void{
    this.ltpessoas1 = ltpessoas
    console.log(this.ltpessoas1)
  }

}
