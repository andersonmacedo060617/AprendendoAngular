import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, observable, Observer, Subscription } from 'rxjs';
import 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit, OnDestroy  {

  public oferta: Oferta
  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: Params)=>{
      this.ofertasService.getOfertaPorId(parametros.id)
      .then((oferta:Oferta)=>{
        this.oferta = oferta
      })
      
    })
  }

  ngOnDestroy(): void {

  }
  

}
