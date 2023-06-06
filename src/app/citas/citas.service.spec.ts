import { TestBed } from '@angular/core/testing';

import { CitasService } from './citas.service';

describe('CitasService', () => {
  let service: CitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
