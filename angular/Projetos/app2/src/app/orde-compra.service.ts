import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {URL_API} from './app.api';
import { map } from 'rxjs/operators';


@Injectable()
export class OrdemCompraService{

    private httpOptions = {
        headers : new HttpHeaders({
            'Content-type' : 'application/json'
        })
    } 
    constructor(private http:HttpClient){}

    public efetivarCompra(pedido : Pedido):Observable<number>{
        
        return this.http.post<any>(
            `${URL_API}/pedidos`, 
            JSON.stringify(pedido),
            this.httpOptions
        )
        .pipe(
            map((resposta:any)=> resposta.id)
        )
    }
}