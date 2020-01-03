import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsUsuarioComponent } from './posts-usuario/posts-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  {path: 'lista-usuarios', component: ListaUsuariosComponent},
  {path: 'post', component: PostsUsuarioComponent},
  {path: "**", redirectTo: "/lista-usuarios"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
