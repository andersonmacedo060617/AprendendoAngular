import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from 'src/app/bd.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string
  private imagem:any

  public formulario : FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(private bdService: Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.email = user.email
    })
  }

  public publicar():void{
    this.bdService.publicar({
      titulo: this.formulario.value.titulo,
      email: this.email,
      imagem: this.imagem[0]
    })
  }

  public preparaImagemUpload(event: Event): void{
    this.imagem = (<HTMLInputElement>event.target).files
  }

}
