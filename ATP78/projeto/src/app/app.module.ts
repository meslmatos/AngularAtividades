import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemTiposClientesComponent } from './listagem-tipos-clientes/listagem-tipos-clientes.component';
import { CadastroTiposClientesComponent } from './cadastro-tipos-clientes/cadastro-tipos-clientes.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListagemTiposClientesComponent,
    CadastroTiposClientesComponent,
    ListagemClientesComponent,
    CadastroClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
