import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../_shared/carro.model';
import { LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-painel-oferta',
  templateUrl: './painel-oferta.component.html',
  styleUrls: ['./painel-oferta.component.css']
})
export class PainelOfertaComponent implements OnInit {

  @Input() public carros : Carro[] 

  constructor() { }

  ngOnInit() {
    
  }

}
