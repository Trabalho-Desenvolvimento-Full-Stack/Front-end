import { Categoria } from './../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  post(categoria: Categoria){
    return this.http.post<Categoria>(`${environment}/categoria`, categoria);
  }

  login(categoria: Categoria){
    return this.http.post<Categoria>(`${environment}/categoria/login`, categoria);
  }

  put(categoria: Categoria){
    return this.http.put<Categoria>(`${environment}/categoria`, categoria);
  }

  getPeloId(id: number){
    return this.http.get<Categoria>(`${environment}/categoria/${id}`);
  }

  get(){
    return this.http.get<Categoria[]>(`${environment}/categoria`);
  }

  delete(id: number) {
    return this.http.get<Categoria[]>(`${environment}/categoria/${id}`);
  }
}