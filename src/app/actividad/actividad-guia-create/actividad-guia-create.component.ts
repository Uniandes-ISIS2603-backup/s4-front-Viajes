import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ActividadService } from '../actividad.service';

import { Actividad } from '../actividad';

import { Guia } from '../../guia/guia';

import { GuiaService } from '../../guia/guia.service';

@Component({
  selector: 'app-actividad-guia-create',
  templateUrl: './actividad-guia-create.component.html',
  styleUrls: ['./actividad-guia-create.component.css']
})
export class ActividadGuiaCreateComponent implements OnInit {


    /**
    * Constructor for the component
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private actividadService: ActividadService,
        private guiaService: GuiaService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { }

    /**
    * The new editorial
    */
    actividad: Actividad;
    
    actividadId: number;
    
    guia: Guia;
    
    guiaId: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an activity
    */
    createGuia(): Guia {
        console.log(this.guia);
        this.guiaService.createGuia(this.guia)
            .subscribe((guia) => {
                this.guia = guia;
                this.create.emit();
                this.associateActividadGuia();
                this.toastrService.success("El guia fue creada", "Creacion de guia");
                
            });
            return this.guia;
    }
    
      /**
    * Creates an activity
    */
    associateActividadGuia(): void{
        console.log(this.guia);
        this.actividadService.associateActividadGuia(this.actividadId,this.guiaId);
            
    }
    
    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.guia = new Guia();       
        this.actividadId = +this.route.snapshot.paramMap.get('identificador');
        if (this.actividadId){
        this.actividad = new Actividad();
        }
    }
}
