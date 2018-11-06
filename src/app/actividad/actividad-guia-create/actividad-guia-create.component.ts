import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

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
    
    @Input() actividadId: number;
    
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
    @Output() updateGuias = new EventEmitter();

    /**
    * Creates an activity
    */
    createGuia(): Guia {
        this.guiaService.createGuia(this.guia)
            .subscribe((guia) =>
            {
                this.guia = this.guia;
                this.guiaId = this.guia.documento;
                this.create.emit();
                this.toastrService.success("El guia fue creada", "Creacion de guia");
                
            }
            );
        this.actividadService.associateActividadGuia(this.actividadId,this.guia.documento).
            subscribe(() => {
                this.updateGuias.emit();
                this.toastrService.success("El guia se pudo asociar a la actividad", 'Guia asociado');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
            
            return this.guia;
    }
    
      /**
    * Creates an activity
    */
    associateActividadGuia(): any{

       console.log(this.actividadService.associateActividadGuia(this.actividadId,this.guiaId));
       return this.actividadService.associateActividadGuia(this.actividadId,this.guiaId);
            
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

        }
    }

