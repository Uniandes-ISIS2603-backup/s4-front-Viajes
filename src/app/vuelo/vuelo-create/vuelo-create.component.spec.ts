import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloCreateComponent } from './vuelo-create.component';

describe('VueloCreateComponent', () => {
  let component: VueloCreateComponent;
  let fixture: ComponentFixture<VueloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
