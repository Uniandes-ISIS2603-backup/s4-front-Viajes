import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { VueloListComponent } from './vuelo-list.component';
import {VueloService} from '../vuelo.service';
import { Vuelo } from '../vuelo';

describe('VueloListComponent', () => {
    let component: VueloListComponent;
    let fixture: ComponentFixture<VueloListComponent>;
    const vuelos: Vuelo[] = require('../../../assets/vuelo.json');
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppRoutingModule, HttpClientModule, AppModule ],
            declarations: [ ],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, VueloService ]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(VueloListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
     it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    
    it('should have a list of vuelos', () => {
        component.vuelos = vuelos;
        expect(component.vuelos.length).toEqual(vuelos.length);
    });

    it('a vuelo should be a vuelo (first and last)', () => {
        component.vuelos = vuelos;
        //revisar todos los vuelos
        expect(component.vuelos[0].numero).toEqual(vuelos[0].numero);
        expect(component.vuelos[vuelos.length - 1].numero).toEqual(vuelos[vuelos.length - 1].numero);
    });
});
