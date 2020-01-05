import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importações do angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { PostsUsuarioComponent } from './posts-usuario/posts-usuario.component';
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ModalComponent } from './modal/modal.component';
import {DialogModule} from 'primeng/dialog';

//Importações do primeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    DetalhesUsuarioComponent,
    PostsUsuarioComponent,
    BarraNavegacaoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
