import { SalvarTiposClientesService } from './../services/salvar-tipos-clientes.service';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-cadastro-tipos-clientes',
  templateUrl: './cadastro-tipos-clientes.component.html',
  styleUrls: ['./cadastro-tipos-clientes.component.css']
})
export class CadastroTiposClientesComponent implements OnInit {
  id:number = 0;
  nome:string = "";

  constructor(private salvarTiposClientesService:SalvarTiposClientesService) { }

  ngOnInit(): void {
  }

  salvar(){
    let tipoCliente = {
      "id":this.id,
      "nome":this.nome
    };
    console.log(tipoCliente)
    this.salvarTiposClientesService.salvar(tipoCliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.nome = "";
  }

}
