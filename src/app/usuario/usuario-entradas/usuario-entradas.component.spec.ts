import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEntradasComponent } from './usuario-entradas.component';

describe('UsuarioEntradasComponent', () => {
  let component: UsuarioEntradasComponent;
  let fixture: ComponentFixture<UsuarioEntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
