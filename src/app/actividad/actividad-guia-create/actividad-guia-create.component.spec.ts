import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadGuiaCreateComponent } from './actividad-guia-create.component';

describe('ActividadGuiaCreateComponent', () => {
  let component: ActividadGuiaCreateComponent;
  let fixture: ComponentFixture<ActividadGuiaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadGuiaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadGuiaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
