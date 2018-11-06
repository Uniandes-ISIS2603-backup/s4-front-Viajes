import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptor } from './httperrorinterceptor.service';

describe('HttperrorinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorInterceptor = TestBed.get(HttpErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
