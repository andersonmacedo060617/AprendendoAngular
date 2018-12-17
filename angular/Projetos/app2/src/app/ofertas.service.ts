import { Oferta } from './shared/oferta.model';
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertaService{

    constructor(private http: HttpClient){}

    public ofertas : Array<Oferta>

    public getOfertas():Promise<Oferta[]>{
        return this.http.get<Oferta[]>('http://localhost:300/ofertas').subscribe()
            .toPromise()
            .then((resposta: any)=>{
                resposta.json()
            })
    }

    // public getOfertas2():Promise<Array<Oferta>>{
    //     return new Promise((resolve, reject)=>{
    //         let deu_certo = true
    //         if(deu_certo){
    //             setTimeout(()=>resolve(this.ofertas), 3000)
    //         }else{
    //             reject({
    //                 codigo_erro: 404, 
    //                 message_erro: 'Servidor não encontado' 
    //             })
    //         }
            
            
    //     })
    //     .then((ofertas: Oferta[])=>{
    //         console.log('primeiro then')
    //         return ofertas
    //     })
    //     .then((ofertas : Oferta[])=>{
    //         console.log('Segundo Then')
    //         return new Promise((resolve2, reject2)=>{
    //             setTimeout(()=>{ resolve2( ofertas )},3000)
    //         })
    //     })
    //     .then((ofertas:Oferta[])=>{
    //         console.log('Terceiro then executado porque estava aguardando uma promisse ser resolvida')
    //         return ofertas
    //     })
    // }
}