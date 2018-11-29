import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlojamientoEditComponent } from './alojamiento-edit.component';

describe('AlojamientoEditComponent', () => {
  let component: AlojamientoEditComponent;
  let fixture: ComponentFixture<AlojamientoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
