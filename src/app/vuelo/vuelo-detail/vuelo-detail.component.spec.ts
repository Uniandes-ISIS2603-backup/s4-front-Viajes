import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloDetailComponent } from './vuelo-detail.component';

describe('VueloDetailComponent', () => {
  let component: VueloDetailComponent;
  let fixture: ComponentFixture<VueloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
