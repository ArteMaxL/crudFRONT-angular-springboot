import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/producto/';

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.HttpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public detalle(id: number): Observable<Producto>{
    return this.HttpClient.get<Producto>(this.productoURL + `detalle/${id}`);
  }

  public detalleNombre(nombre: string): Observable<Producto>{
    return this.HttpClient.get<Producto>(this.productoURL + `detallenombre/${nombre}`);
  }

  public save(producto: Producto): Observable<any>{
    return this.HttpClient.post<any>(this.productoURL + 'crear', producto);
  }

  public actualizar(id: number, producto: Producto): Observable<any>{
    return this.HttpClient.put<any>(this.productoURL + `actualizar/${id}`, producto);
  }

  public eliminar(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.productoURL + `eliminar/${id}`);
  }
}
