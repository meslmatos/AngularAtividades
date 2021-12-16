import { TestBed } from '@angular/core/testing';

import { SalvarTiposClientesService } from './salvar-tipos-clientes.service';

describe('SalvarTiposClientesService', () => {
  let service: SalvarTiposClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarTiposClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
