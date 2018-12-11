import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../shared/pessoa';

@Component({
  selector: 'app-table-calculo',
  templateUrl: './table-calculo.component.html',
  styleUrls: ['./table-calculo.component.css']
})
export class TableCalculoComponent implements OnInit {

  @Input() public pessoa : Pessoa = new Pessoa()

  constructor() { }

  ngOnInit() {
  }

}
