import { TestBed } from '@angular/core/testing';

import { SalvarClientesService } from './salvar-clientes.service';

describe('SalvarClientesService', () => {
  let service: SalvarClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
