import { ItemPedido } from './../models/item-pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  constructor(private http: HttpClient) { }

  post(itempedido: ItemPedido){
    return this.http.post<ItemPedido>(`${environment}/itempedido`, itempedido);
  }

  login(itempedido: ItemPedido){
    return this.http.post<ItemPedido>(`${environment}/itempedido/login`, itempedido);
  }

  put(itempedido: ItemPedido){
    return this.http.put<ItemPedido>(`${environment}/itempedido`, itempedido);
  }

  getPeloId(id: number){
    return this.http.get<ItemPedido>(`${environment}/itempedido/${id}`);
  }

  get(){
    return this.http.get<ItemPedido[]>(`${environment}/itempedido`);
  }

  delete(id: number) {
    return this.http.get<ItemPedido[]>(`${environment}/itempedido/${id}`);
  }
}