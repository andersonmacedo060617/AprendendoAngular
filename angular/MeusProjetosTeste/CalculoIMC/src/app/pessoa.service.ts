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
        .then((resposta:any)=>{
            let listaPessoas : Pessoa[] = new Array()
            resposta.forEach(element => {
                let pes : Pessoa = new Pessoa()
                pes.id = element.id
                pes.nome = element.nome
                pes.idade = element.idade
                pes.altura = element.altura
                pes.peso = element.peso
                pes.sexoPessoa = element.sexoPessoa
                listaPessoas.push(pes)
            });
            return listaPessoas
        })
    }
}