import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallaListComponent } from './medalla-list.component';

describe('MedallaListComponent', () => {
  let component: MedallaListComponent;
  let fixture: ComponentFixture<MedallaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedallaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedallaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
