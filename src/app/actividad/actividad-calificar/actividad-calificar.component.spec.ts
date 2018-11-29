import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCalificarComponent } from './actividad-calificar.component';

describe('ActividadCalificarComponent', () => {
  let component: ActividadCalificarComponent;
  let fixture: ComponentFixture<ActividadCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
