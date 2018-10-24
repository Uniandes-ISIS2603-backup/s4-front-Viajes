import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { ProveedorListComponent } from './proveedor-list.component';
import {ProveedorService} from '../proveedor.service';
import { Proveedor } from '../proveedor';

describe('ProveedorListComponent', () => {
  let component: ProveedorListComponent;
  let fixture: ComponentFixture<ProveedorListComponent>;
  const proveedores: Proveedores[] = require('http://localhost:8000/frontstepbystep-api/api');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, ProveedorService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a list of proveedores', () => {
    component.proveedores = proveedores;
    expect(component.proveedores.length).toEqual(proveedores.length);
  });

  it('a proveedor should be a proveedor (first and last)', () => {
    component.proveedores = proveedores;
    //revisar todos los proveedores
    expect(component.proveedores[0].numero).toEqual(proveedores[0].numero);
    expect(component.proveedores[proveedores.length - 1].numero).toEqual(proveedores[proveedores.length - 1].numero);
  });
});

