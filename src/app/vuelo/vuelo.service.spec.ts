import { TestBed } from '@angular/core/testing';

import { VueloService } from './vuelo.service';

describe('VueloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VueloService = TestBed.get(VueloService);
    expect(service).toBeTruthy();
  });
});
