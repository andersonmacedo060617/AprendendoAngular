import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../_shared/endereco.model';

@Injectable()
export class EnderecoService {
    protected baseUrl = "https://viacep.com.br/ws"
    private formato : string = "json"
    constructor(protected http : HttpClient){
    } 



    public getByCep(cep : string):Promise<Endereco>{
        return this.http.get(`${this.baseUrl}/${cep}/${this.formato}`)
            .toPromise()
            .then((resposta:any)=>{
                return this.convertToModel(resposta)
            })
    }

    public findCep(uf:string, localidade: string, logradouro: string): Promise<Endereco>{
        return this.http.get(`${this.baseUrl}/${uf}/${localidade}/${logradouro}/${this.formato}`)
            .toPromise()
            .then((resposta:any)=>{
                console.log(`${this.baseUrl}/${uf}/${localidade}/${logradouro}/${this.formato}`)
                return this.convertToModel(resposta[0])
            })
    }


    public convertToModel(resposta:any):Endereco{
        let endereco : Endereco = new Endereco()
        if(resposta !== undefined){
            endereco.bairro = resposta.bairro
            endereco.cep = resposta.cep
            endereco.complemento = resposta.complemento
            endereco.gia = resposta.gia
            endereco.ibge = resposta.ibge
            endereco.localidade = resposta.localidade
            endereco.logradouro = resposta.logradouro
            endereco.uf = resposta.uf
        }
        return endereco
    }

}