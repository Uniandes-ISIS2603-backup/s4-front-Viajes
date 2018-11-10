import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientoDetailComponent } from './alojamiento-detail.component';

describe('AlojamientoDetailComponent', () => {
  let component: AlojamientoDetailComponent;
  let fixture: ComponentFixture<AlojamientoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
