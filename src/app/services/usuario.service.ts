import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosUsuario } from '../models/usuario';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuariosALL(): Observable<DadosUsuario[]>{
    return this.http.get<DadosUsuario[]>(environment.Api + "/users")
  }

  getPostUserId(userId: number): Observable<Post[]>{
    return this.http.get<Post[]>(environment.Api + "/posts?userId="+ userId)
  }

}
