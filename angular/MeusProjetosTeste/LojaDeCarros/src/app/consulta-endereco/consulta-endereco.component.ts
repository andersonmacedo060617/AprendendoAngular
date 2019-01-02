import { Component, OnInit } from '@angular/core';
import { Endereco } from '../_shared/endereco.model';
import { EnderecoService } from '../_services/endereco.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-consulta-endereco',
  templateUrl: './consulta-endereco.component.html',
  styleUrls: ['./consulta-endereco.component.css'],
  providers: [EnderecoService]
})
export class ConsultaEnderecoComponent implements OnInit {

  public endereco: Endereco = new Endereco()
  constructor(private enderecoService : EnderecoService) {

   }

  ngOnInit() {
  }

  public setCEP(cep: Event):void{
    this.endereco.cep = (<HTMLInputElement>cep.target).value
  }

  public consultaCep():void{
    console.log(isNumber(this.endereco.cep.replace(".", "").replace("-", "")))
    if(this.endereco.cep.replace(".", "").replace("-", "").length === 8){
      this.enderecoService.getByCep(this.endereco.cep)
      .then((resposta : any)=>{
        this.endereco = resposta
      })
    }
  }


}
