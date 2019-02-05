import * as firebase from 'firebase' 
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd{

    constructor(private progresso: Progresso){}

    public publicar(publicacao: any):void{


        

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo})
            .then((resposta: any)=>{
                let nomeImagem = resposta.key
                console.log(resposta.key)

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
                    }
                )

            })

        

        
    }

    public consultaPublicacoes(email:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            firebase.database().ref(`publicacoes/${btoa(email)}`)
            .once('value')
            .then((snapshot)=>{
                //console.log(snapshot.val())
                let publicacoes : Array<any> = []
                snapshot.forEach((childSnapshot: any)=>{
                    let publicacao = childSnapshot.val()

                    //consulta url da imagem
                    firebase.storage().ref()
                        .child(`imagens/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url:string)=>{
                            //console.log(url)
                            publicacao.url_imagem = url

                            //consulta o nome do usuario
                            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                .once('value')
                                .then((snapshot)=>{
                                    publicacao.nome_usuario = snapshot.val().nome_usuario
                                    publicacoes.push(publicacao)
                                })
                        })
                })
                resolve(publicacoes)
            })
        })

        
    }


}