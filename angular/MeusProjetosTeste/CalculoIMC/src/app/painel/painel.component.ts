import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../shared/pessoa';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  @Input() public pessoa : Pessoa = new Pessoa()

  constructor() { }

  ngOnInit() {
  }

  public dadosPessoa(pessoa: Pessoa):void{
    this.pessoa = pessoa    
  }

}
