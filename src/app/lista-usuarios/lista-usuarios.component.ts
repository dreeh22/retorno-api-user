import { Component, OnInit, Output, Input } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { DadosUsuario, Endereco, Empresa } from '../models/usuario';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { RepassarDadosService } from '../services/repassar-dados.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  p: number = 1;

  abrirDatalhe= false;
  cardAberto = true;
  divAberto = true;
  gridTabela = 12;

 listaPost: Post[] = [];



  listaUsuarios: DadosUsuario[];

  endereco: Endereco = {
    city: '',
    street: '', 
    suite: '',
    zipcode: ''
  };

  empresa: Empresa = {
    name: '',
    catchPhrase:'',
    bs: ''
  }


  usuario: DadosUsuario = {
    id: 0,
    name:'',
    email:'',
    username:'',
    address: this.endereco,
    phone: '',
    website: '',
    company: this.empresa
    
  };

  constructor(private usuariosService: UsuarioService, 
              private router: Router, 
              private dataPostsUser: RepassarDadosService) { }

  ngOnInit() {

    this.getListaUsuario();
    this.listaPost;

  }

  getListaUsuario(){
    this.usuariosService.getUsuariosALL().subscribe(listaApi => this.listaUsuarios = listaApi);
  }

  detalharDados(dados){

    this.usuario = dados;

    if(this.abrirDatalhe == false){
      this.abrirDatalhe = true;
      this.gridTabela = 9;
    }else{
      this.abrirDatalhe = false;
      this.gridTabela = 12;
    }

  }


  capturarUserPosts(objetoUser){
    //this.usuariosService.getPostUserId(objetoUser).subscribe(dadosPostUser => this.listaPost = dadosPostUser);
    this.dataPostsUser.setPostsUser(objetoUser);
    this.router.navigateByUrl('/post');
  }

}
