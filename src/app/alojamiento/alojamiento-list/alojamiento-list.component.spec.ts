import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {AlojamientoListComponent} from './alojamiento-list.component';
import {Alojamiento} from '../alojamiento';
import {AlojamientoService} from '../alojamiento.service';

describe('AlojamientoListComponent', () => {
  let component: AlojamientoListComponent;
  let fixture: ComponentFixture<AlojamientoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, AlojamientoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


