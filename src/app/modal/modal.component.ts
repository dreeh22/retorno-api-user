import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Comentario } from '../models/comentarios';
import { Post } from '../models/post';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() listaComentarioRecebido: Comentario [] = [];


  constructor() { }

  ngOnInit() {

    console.log('DADOS RECEBIDOS COM SUCESSO: ',this.listaComentarioRecebido);
  }


}
