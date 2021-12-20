import { SalvarTiposClientesService } from './../services/salvar-tipos-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-tipos-clientes',
  templateUrl: './listagem-tipos-clientes.component.html',
  styleUrls: ['./listagem-tipos-clientes.component.css']
})
export class ListagemTiposClientesComponent implements OnInit {
  list:any[]

  constructor(private tipoService:SalvarTiposClientesService) {
    this.list = [];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.list = this.tipoService.listar()
  }

}
