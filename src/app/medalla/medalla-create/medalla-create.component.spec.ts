import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallaCreateComponent } from './medalla-create.component';

describe('MedallaCreateComponent', () => {
  let component: MedallaCreateComponent;
  let fixture: ComponentFixture<MedallaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedallaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedallaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
