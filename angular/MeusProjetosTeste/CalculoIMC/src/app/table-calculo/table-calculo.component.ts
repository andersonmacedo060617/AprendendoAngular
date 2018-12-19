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

  public pessoas : Pessoa[]
  constructor(private pessoaService : PessoaService) { }

  ngOnInit() {
    this.pessoaService.findAllPessoas()
      .then((pessoas: Pessoa[])=>{
        this.pessoas = pessoas
        console.log(pessoas)
      })
  }

}
