import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Comentario } from '../models/comentarios';
import { Post } from '../models/post';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //comentario: Comentario = {
  //  postId: 0,
  //  id: 0,
  //  name: '',
  //  email: '',
  //  body: ''
  //}

  listaComentario: Comentario [] = [];

  @Input() post: Post;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.listComments();

  }

  listComments(){
    this.usuarioService.getComentariosPost(this.post.id).subscribe(dados => this.listaComentario = dados);
  }

}
