import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorVuelosComponent } from './proveedor-vuelos.component';

describe('ProveedorVuelosComponent', () => {
  let component: ProveedorVuelosComponent;
  let fixture: ComponentFixture<ProveedorVuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorVuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
