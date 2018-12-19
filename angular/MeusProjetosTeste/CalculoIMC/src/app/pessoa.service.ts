import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Pessoa } from './shared/pessoa';


@Injectable()
export class PessoaService{
    constructor(private http: HttpClient){

    }

    public findAllPessoas():Promise<Pessoa[]>{
        return this.http.get<Pessoa[]>("http://localhost:3000/contatos")
        .toPromise()
        .then((resposta:any)=>resposta)
    }
}