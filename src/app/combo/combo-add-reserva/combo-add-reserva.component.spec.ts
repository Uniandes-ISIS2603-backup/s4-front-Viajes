import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ComboAddReservaComponent } from './combo-add-reserva.component';

describe('ComboAddReservaComponent', () => {
  let component: ComboAddReservaComponent;
  let fixture: ComponentFixture<ComboAddReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboAddReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboAddReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
