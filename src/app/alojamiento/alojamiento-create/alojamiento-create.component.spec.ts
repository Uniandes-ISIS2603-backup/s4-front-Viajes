import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientoCreateComponent } from './alojamiento-create.component';

describe('AlojamientoCreateComponent', () => {
  let component: AlojamientoCreateComponent;
  let fixture: ComponentFixture<AlojamientoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
