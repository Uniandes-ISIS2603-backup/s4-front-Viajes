import { TestBed } from '@angular/core/testing';

import { MedallaService } from './medalla.service';

describe('MedallaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedallaService = TestBed.get(MedallaService);
    expect(service).toBeTruthy();
  });
});
