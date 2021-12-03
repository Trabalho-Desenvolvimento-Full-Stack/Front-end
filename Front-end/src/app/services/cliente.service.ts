import { Cliente } from './../models/Cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente!: Cliente;
  constructor(private http: HttpClient) { }

  post(cliente: Cliente){
    return this.http.post<Cliente>(`${environment}/cliente`, cliente);
  }

  login(cliente: Cliente){
    return this.http.post<Cliente>(`${environment}/cliente/login`, cliente);
  }

  put(cliente: Cliente){
    return this.http.put<Cliente>(`${environment}/cliente`, cliente);
  }

  getPeloId(id: number){
    return this.http.get<Cliente>(`${environment}/cliente/${id}`);
  }

  get(){
    return this.http.get<Cliente[]>(`${environment}/cliente`);
  }
}