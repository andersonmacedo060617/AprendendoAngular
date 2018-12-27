import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BaseService<T>{
    protected baseUrl: string
    protected http : HttpClient
    constructor(baseUrl:string){
        this.baseUrl = baseUrl
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
            .then((resposta:any)=>resposta.shift())
    }

    public getByField(field:string, value:string):Promise<T[]>{
        return this.http.get(`${this.baseUrl}?${field}=${value}`)
            .toPromise()
            .then((resposta:any)=>resposta)
    }

}