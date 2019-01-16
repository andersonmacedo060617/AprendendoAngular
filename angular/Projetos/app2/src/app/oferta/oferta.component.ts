import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import 'rxjs';
import {CarrinhoService} from '../carrinho.service';


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
    private ofertasService: OfertaService,
    private carrinhoService: CarrinhoService
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

  public adicionarItemCarrinho(oferta : Oferta) : void{
    this.carrinhoService.incluirItem(oferta)
    
  }
  

}
