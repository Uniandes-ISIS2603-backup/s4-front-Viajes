import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ReservaAddPagoComponent } from './reserva-add-pago.component';

describe('ReservaAddPagoComponent', () => {
  let component: ReservaAddPagoComponent;
  let fixture: ComponentFixture<ReservaAddPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaAddPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaAddPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
