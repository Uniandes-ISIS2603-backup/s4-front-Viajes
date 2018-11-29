import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorCalificarComponent } from './proveedor-calificar.component';

describe('ProveedorCalificarComponent', () => {
  let component: ProveedorCalificarComponent;
  let fixture: ComponentFixture<ProveedorCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
