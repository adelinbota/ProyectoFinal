import { TestBed } from '@angular/core/testing';

import { ProduccionService } from './producto.service';

describe('ProduccionService', () => {
  let service: ProduccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(ProduccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
