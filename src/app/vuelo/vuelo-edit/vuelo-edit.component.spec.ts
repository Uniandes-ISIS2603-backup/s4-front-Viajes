import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloEditComponent } from './vuelo-edit.component';

describe('VueloEditComponent', () => {
  let component: VueloEditComponent;
  let fixture: ComponentFixture<VueloEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
