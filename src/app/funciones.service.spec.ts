import { TestBed } from '@angular/core/testing';

import { FuncionesService } from './funciones.service';

describe('FuncionesService', () => {
  let service: FuncionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(FuncionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
