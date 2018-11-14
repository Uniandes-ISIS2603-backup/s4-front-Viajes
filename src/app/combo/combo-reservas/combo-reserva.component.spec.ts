import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboReservaComponent } from './combo-reserva.component';

describe('ComboReservaComponent', () => {
  let component: ComboReservaComponent;
  let fixture: ComponentFixture<ComboReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
