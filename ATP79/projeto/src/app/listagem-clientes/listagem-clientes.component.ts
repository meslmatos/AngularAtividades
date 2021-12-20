import { Cliente } from './../model/cliente';
import { SalvarClientesService } from './../services/salvar-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {
  list:Cliente[]
  constructor(private clienteService: SalvarClientesService) {
    this.list = [];
    this.listar();
   }

  ngOnInit(): void {
  }
  private listar(){
    this.list = this.clienteService.listar()
  }

}
