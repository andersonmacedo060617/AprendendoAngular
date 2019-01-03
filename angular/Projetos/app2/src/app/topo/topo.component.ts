import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';

import { Oferta } from '../shared/oferta.model';

import {switchMap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas2 : Oferta[]
  public ofertas : Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertaService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo:string)=>{
        
        if(termo.trim() === ""){
          return of<Oferta[]>()
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }))
      .pipe(catchError((err: any)=>{
        console.log(err)
        return of<Oferta[]>([])
      }))

      this.ofertas.subscribe((ofertas: Oferta[])=>{
        this.ofertas2 = ofertas
      })
  }

  public pesquisa(termoDaBusca:string): void{
    console.log('keyup caracter:', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)

  }

}
