import { UsuarioMaster } from './../models/usuario-master.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// inserir o baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class UsuarioMasterService {

  constructor(private http: HttpClient) { }

  post(usuariomaster: UsuarioMaster){
    return this.http.post<UsuarioMaster>(`${environment}/usuariomaster`, usuariomaster);
  }

  login(usuariomaster: UsuarioMaster){
    return this.http.post<UsuarioMaster>(`${environment}/usuariomaster/login`, usuariomaster);
  }

  put(usuariomaster: UsuarioMaster){
    return this.http.put<UsuarioMaster>(`${environment}/usuariomaster`, usuariomaster);
  }

  getPeloId(id: number){
    return this.http.get<UsuarioMaster>(`${environment}/usuariomaster/${id}`);
  }

  get(){
    return this.http.get<UsuarioMaster[]>(`${environment}/usuariomaster`);
  }

  delete(id: number) {
    return this.http.get<UsuarioMaster[]>(`${environment}/usuariomaster/${id}`);
  }
}