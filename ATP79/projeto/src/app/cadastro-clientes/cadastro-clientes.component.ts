import { Cliente } from './../model/cliente';
import { SalvarClientesService } from './../services/salvar-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  cliente = {} as Cliente;

  constructor(private salvarClientes:SalvarClientesService) { }


  ngOnInit(): void {
  }

  salvar(){
    this.salvarClientes.salvar(this.cliente);
    this.limpar();
  }

  private limpar(){
    this.cliente = {} as Cliente;
  }

}
