import { TipoCliente } from './../model/tipo-cliente';

import { OnInit, Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalvarTiposClientesService{
  private lista:TipoCliente[];
    constructor(){
      this.lista = [];
    }
    salvar(tipoCliente:TipoCliente):void{
      console.log("salvar do service",tipoCliente)
      this.lista.push(tipoCliente);
    }
    listar():TipoCliente[]{
      return this.lista;
    }
}

