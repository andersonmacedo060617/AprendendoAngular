import { BaseService } from './base.service';
import { Carro } from '../_shared/carro.model';
import { HttpClient } from '@angular/common/http';

export class CarrosService extends BaseService<Carro>{
    constructor(){
        super("http://localhost:3000/Carros")
    } 
}