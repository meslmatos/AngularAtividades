import { Cliente } from './../model/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalvarClientesService {
  private lista:Cliente[];
  constructor(){
    this.lista = [];
  }
  salvar(cliente:Cliente):void{
    console.log("salvar do service",cliente)
    this.lista.push(cliente);
  }
  listar():Cliente[]{
    return this.lista;
  }
}
