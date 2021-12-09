import { Produto } from './../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  post(produto: Produto){
    return this.http.post<Produto>(`${environment}/produto`, produto);
  }

  login(produto: Produto){
    return this.http.post<Produto>(`${environment}/produto/login`, produto);
  }

  put(produto: Produto){
    return this.http.put<Produto>(`${environment}/produto`, produto);
  }

  getPeloId(id: number){
    return this.http.get<Produto>(`${environment}/produto/${id}`);
  }

  get(){
    return this.http.get<Produto[]>(`${environment}/produto`);
  }

  delete(id: number) {
    return this.http.get<Produto[]>(`${environment}/produto/${id}`);
  }
}