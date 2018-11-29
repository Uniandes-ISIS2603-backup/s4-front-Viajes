import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloCalificarComponent } from './vuelo-calificar.component';

describe('VueloCalificarComponent', () => {
  let component: VueloCalificarComponent;
  let fixture: ComponentFixture<VueloCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
