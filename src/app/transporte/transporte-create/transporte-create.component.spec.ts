import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteCreateComponent } from './transporte-create.component';

describe('TransporteCreateComponent', () => {
  let component: TransporteCreateComponent;
  let fixture: ComponentFixture<TransporteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
