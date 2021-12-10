import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTiposClientesComponent } from './cadastro-tipos-clientes.component';

describe('CadastroTiposClientesComponent', () => {
  let component: CadastroTiposClientesComponent;
  let fixture: ComponentFixture<CadastroTiposClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTiposClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTiposClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
