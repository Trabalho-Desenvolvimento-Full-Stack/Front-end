import { Pedido } from './../models/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  post(pedido: Pedido){
    return this.http.post<Pedido>(`${environment}/pedido`, pedido);
  }

  login(pedido: Pedido){
    return this.http.post<Pedido>(`${environment}/pedido/login`, pedido);
  }

  put(pedido: Pedido){
    return this.http.put<Pedido>(`${environment}/pedido`, pedido);
  }

  getPeloId(id: number){
    return this.http.get<Pedido>(`${environment}/pedido/${id}`);
  }

  get(){
    return this.http.get<Pedido[]>(`${environment}/pedido`);
  }

  delete(id: number) {
    return this.http.get<Pedido[]>(`${environment}/pedido/${id}`);
  }
}