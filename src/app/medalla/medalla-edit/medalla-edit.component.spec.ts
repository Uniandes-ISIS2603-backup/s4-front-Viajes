import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallaEditComponent } from './medalla-edit.component';

describe('MedallaEditComponent', () => {
  let component: MedallaEditComponent;
  let fixture: ComponentFixture<MedallaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedallaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedallaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
