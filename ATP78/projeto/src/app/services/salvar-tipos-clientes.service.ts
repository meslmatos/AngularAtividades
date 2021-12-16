
import { OnInit, Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalvarTiposClientesService{
  private lista:any[];
    constructor(){
      this.lista = [];
    }
    salvar(tipoCliente:any):void{
      console.log("salvar do service",tipoCliente)
      this.lista.push(tipoCliente);
    }
    listar():any{
      return this.lista;
    }
}

