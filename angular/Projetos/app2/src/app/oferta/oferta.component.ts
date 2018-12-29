import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, observable, Observer } from 'rxjs';
import 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit  {

  public oferta: Oferta
  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertaService
  ) {}

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta:Oferta)=>{
        this.oferta = oferta
      })

    // observable observavel
    let meuObservableTeste = Observable.create((observer: Observer<number>)=>{
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.complete()
      observer.next(4)
    })

    //observable observador
    meuObservableTeste.subscribe(
      (resultado: any)=> console.log(resultado + 10),
      (erro:string)=>console.log(erro),
      ()=> console.log('stream foi finalizada')
    )

    let tempo = interval(2000)
    tempo.subscribe((intervalo:number)=>{
      console.log(intervalo)
    })

    /*
    this.route.params.subscribe((parametro:any)=>{
      console.log(parametro)
    },
    (erro:any)=>{
      console.log(erro)
    },
    ()=>{
      console.log('Processamento foi classificado como concluido!')
    })*/

  }

}
