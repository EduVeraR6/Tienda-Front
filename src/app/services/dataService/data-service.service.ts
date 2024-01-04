import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../../environments/environment.prod'
import { Producto } from 'src/app/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(private http : HttpClient) { }


  getProductos() {
    return this.http.get<Producto[]>(environment.apiUrl);
  }

}
