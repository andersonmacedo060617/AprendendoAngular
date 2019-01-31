import * as firebase from 'firebase' 
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd{

    constructor(private progresso: Progresso){}

    public publicar(publicacao: any):void{


        let nomeImagem = Date.now()
        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED, 
                //acompanhamento do processo de upload
                (snapshot)=>{
                    this.progresso.status = 'andamento'
                    this.progresso.estado = snapshot
                    // console.log(snapshot)
                },
                (erro)=>{
                    this.progresso.status = 'erro'
                    // console.log(erro)
                },
                ()=>{
                    // finalização do processo
                    this.progresso.status = 'concluido'
                    // console.log('upload completo')
                }
            )
        
        // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        //     .push({ titulo: publicacao.titulo})
        
    }


}