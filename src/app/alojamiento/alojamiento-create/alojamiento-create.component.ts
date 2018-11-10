import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AlojamientoService } from '../alojamiento.service';
import { Alojamiento } from '../alojamiento';

@Component({
  selector: 'app-alojamiento-create',
  templateUrl: './alojamiento-create.component.html',
  styleUrls: ['./alojamiento-create.component.css']
})
export class AlojamientoCreateComponent implements OnInit {

  /**
    * Constructor del componente
    */
    constructor(
        private alojamientoService: AlojamientoService,
        private toastrService: ToastrService,
        private router: Router
    ) { }
    
    /**
    * The new alojamiento
    */
    alojamiento: Alojamiento;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an alojameinto
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new alojamiento
    */
    @Output() create = new EventEmitter();
    
    /**
    * Crea un nuevo alojameinto
    */
    createAlojamiento(): Alojamiento {
        console.log(this.alojamiento);
        this.alojamientoService.createAlojamiento(this.alojamiento)
            .subscribe((alojamiento) => {
                this.alojamiento = alojamiento;
                this.create.emit();
                this.toastrService.success("El alojamiento fue creado", "Creacion del alojamiento");
                
            });
            return this.alojamiento;
    }
    
    /**
    * Informs the parent component that the user no longer wants to create an alojamiento
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
     /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.alojamiento = new Alojamiento();
    }
}
