import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallaDetailComponent } from './medalla-detail.component';

describe('MedallaDetailComponent', () => {
  let component: MedallaDetailComponent;
  let fixture: ComponentFixture<MedallaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedallaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedallaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
