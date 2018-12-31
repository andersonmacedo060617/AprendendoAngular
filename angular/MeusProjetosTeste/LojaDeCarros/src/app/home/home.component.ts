import { Component, OnInit } from '@angular/core';
import { Carro } from '../_shared/carro.model';
import { CarrosService } from '../_services/carros.service';
import { EnderecoService } from '../_services/endereco.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarrosService, EnderecoService]
})
export class HomeComponent implements OnInit {

  public carros: Carro[]
  constructor(
    private carroService: CarrosService,
    private enderecoService: EnderecoService
    ) { }

  ngOnInit() {
    this.carroService.getAll()
      .then((resposta: Carro[])=>{
        this.carros = resposta
        console.log(this.carros)
      })
    this.enderecoService.getByCep('36031290')
      .then((resposta:any)=>{
      console.log(resposta)
      })

      this.enderecoService.findCep("MG", "Juiz de Fora", "Antonio Bento de Vasconcelos")
      .then((resposta:any)=>{
      console.log(resposta)
      })
  }

}
