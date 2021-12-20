import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ListagemTiposClientesComponent } from './listagem-tipos-clientes/listagem-tipos-clientes.component';
import { CadastroTiposClientesComponent } from './cadastro-tipos-clientes/cadastro-tipos-clientes.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'tipo-cliente', component:ListagemTiposClientesComponent},
  {path: 'tipo-cliente/cadastrar', component:CadastroTiposClientesComponent},
  {path: 'cliente', component: ListagemClientesComponent },
  {path: 'cliente/cadastrar', component: CadastroClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
