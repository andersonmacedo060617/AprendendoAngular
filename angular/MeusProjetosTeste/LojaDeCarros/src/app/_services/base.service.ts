import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable()
export class BaseService<T>{
    protected baseUrl: string

    constructor(protected http : HttpClient){
    } 



    public getAll():Promise<T[]>{
        console.log(this.baseUrl)
        return this.http.get<T[]>(`${this.baseUrl}`)
            .toPromise()
            .then((resposta:any)=>resposta)
    }

    public getById(id:number):Promise<T>{
        return this.http.get(`${this.baseUrl}/${id}`)
            .toPromise()
            .then((resposta:any)=>{
                //console.log(resposta)
                return resposta
            })
    }

    public getByField(field:string, value:string):Promise<T[]>{
        return this.http.get(`${this.baseUrl}?${field}=${value}`)
            .toPromise()
            .then((resposta:any)=>resposta)
    }

}