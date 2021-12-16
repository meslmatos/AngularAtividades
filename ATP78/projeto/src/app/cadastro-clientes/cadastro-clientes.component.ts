import { SalvarClientesService } from './../services/salvar-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  constructor(private salvarClientes:SalvarClientesService) { }
  id:number = 0
  nome:string = ""
  idade:number =0
  cpf:string =""

  ngOnInit(): void {
  }

  salvar(){
    let cliente = {
      "id":this.id,
      "nome":this.nome,
      "idade":this.idade,
      "cpf": this.cpf
    };
    console.log(cliente)
    this.salvarClientes.salvar(cliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.nome = "";
    this.idade = 0;
    this.cpf = "";
  }

}
