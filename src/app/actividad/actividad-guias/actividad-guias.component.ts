import { Component, OnInit, Input } from '@angular/core';
import { ActividadService } from '../book.service';
import { Guia } from '../../guia/guia';

@Component({
    selector: 'app-actividad-guias',
    templateUrl: './actividad-guias.component.html',
})
export class ActividadGuiasComponent implements OnInit {
    @Input() actividadGuias : Guia [];
    public isCollapsed = true;
    
    ngOnInit(){
        
    }
}

