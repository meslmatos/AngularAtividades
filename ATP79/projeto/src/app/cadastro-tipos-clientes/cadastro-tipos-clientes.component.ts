import { TipoCliente } from './../model/tipo-cliente';
import { SalvarTiposClientesService } from './../services/salvar-tipos-clientes.service';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-cadastro-tipos-clientes',
  templateUrl: './cadastro-tipos-clientes.component.html',
  styleUrls: ['./cadastro-tipos-clientes.component.css']
})
export class CadastroTiposClientesComponent implements OnInit {
  tipoCliente = {} as TipoCliente;

  constructor(private salvarTiposClientesService:SalvarTiposClientesService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.salvarTiposClientesService.salvar(this.tipoCliente);
    this.limpar();
  }

  private limpar(){
    this.tipoCliente = {} as TipoCliente;
  }

}
