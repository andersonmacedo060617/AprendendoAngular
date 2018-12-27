import { Component, OnInit } from '@angular/core';
import { Carro } from '../_shared/carro.model';
import { CarrosService } from '../_services/carros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarrosService]
})
export class HomeComponent implements OnInit {

  public carros: Carro[]
  constructor(private carroService: CarrosService) { }

  ngOnInit() {
    this.carroService.getAll()
      .then((resposta: Carro[])=>{
        this.carros = resposta
        console.log(this.carros)
      })
  }

}
