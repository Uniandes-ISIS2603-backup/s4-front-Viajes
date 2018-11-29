import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEditComponent } from './actividad-edit.component';

describe('ActividadEditComponent', () => {
  let component: ActividadEditComponent;
  let fixture: ComponentFixture<ActividadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
