import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadGuiasComponent } from './actividad-guias.component';

describe('ActividadGuiasComponent', () => {
  let component: ActividadGuiasComponent;
  let fixture: ComponentFixture<ActividadGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadGuiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
