import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTiposClientesComponent } from './listagem-tipos-clientes.component';

describe('ListagemTiposClientesComponent', () => {
  let component: ListagemTiposClientesComponent;
  let fixture: ComponentFixture<ListagemTiposClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemTiposClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemTiposClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
