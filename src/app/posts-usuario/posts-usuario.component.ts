import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { UsuarioService } from '../services/usuario.service';
import { RepassarDadosService } from '../services/repassar-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-usuario',
  templateUrl: './posts-usuario.component.html',
  styleUrls: ['./posts-usuario.component.css']
})
export class PostsUsuarioComponent implements OnInit {

  listaPost: Post[]= [];

  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''

    }

  constructor(private usuariosService: UsuarioService, 
              private dataPostsUser: RepassarDadosService) { 

              }

  ngOnInit() {
    
    this.listarPosts();
    console.log(this.listaPost);

  }

  listarPosts(){
    this.post = this.dataPostsUser.getPostUser();
    this.usuariosService.getPostUserId(this.post.id).subscribe(dados => this.listaPost = dados);
  }

}
