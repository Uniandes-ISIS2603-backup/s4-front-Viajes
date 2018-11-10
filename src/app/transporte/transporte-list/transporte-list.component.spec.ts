import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {TransporteListComponent} from './transporte-list.component';
import {Transporte} from '../transporte';
import {TransporteService} from '../transporte.service';


describe('TransporteListComponent', () => {
  let component: TransporteListComponent;
  let fixture: ComponentFixture<TransporteListComponent>;
  const transportes: Transporte[] = require('../../../assets/transporteData.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, TransporteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
