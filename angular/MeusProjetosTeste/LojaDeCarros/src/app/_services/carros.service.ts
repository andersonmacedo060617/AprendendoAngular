import { BaseService } from './base.service';
import { Carro } from '../_shared/carro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarrosService extends BaseService<Carro> {
    protected baseUrl: string = "http://localhost:3000/Carros"
}