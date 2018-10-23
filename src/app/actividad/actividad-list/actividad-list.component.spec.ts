import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { ActividadListComponent } from './actividad-list.component';
import { ActividadService } from '../actividad.service';
import { Actividad } from '../actividad';

describe('ActividadListComponent', () => {
    let component: ActividadListComponent;
    let fixture: ComponentFixture<ActividadListComponent>;
    const actividades: Actividad[] = require('../../../assets/actividad.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, ActividadService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActividadListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of activities', () => {
        component.actividades = actividades;
        expect(component.actividades.length).toEqual(actividades.length);
    });

    it('a activity should be a activity (first and last)', () => {
        component.actividades = actividades;
        //revisar todos las actividades
        expect(component.actividades[0].identificador).toEqual(actividades[0].identificador);
        expect(component.actividades[actividades.length - 1].identificador).toEqual(actividades[actividades.length - 1].identificador);
    });
});