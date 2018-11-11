import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TransporteService } from '../transporte.service';
import { Transporte } from '../transporte';

@Component({
  selector: 'app-transporte-create',
  templateUrl: './transporte-create.component.html',
  styleUrls: ['./transporte-create.component.css']
})
export class TransporteCreateComponent implements OnInit {
    
    /**
    * Constructor del componente
    */
    constructor(
        private transporteService: TransporteService,
        private toastrService: ToastrService,
        private router: Router
    ) { }
    
    /**
    * The new transporte
    */
    transporte: Transporte;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an transporte
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user created a new transporte
    */
    @Output() create = new EventEmitter();
    
    /**
    * Crea un nuevo transporte
    */
    createTransporte(): Transporte{
        console.log(this.transporte);
        this.transporteService.createTransporte(this.transporte)
            .subscribe((transporte) => {
                this.transporte = transporte;
                this.create.emit();
                this.toastrService.success("El transporte fue creado", "Creacion del transporte");
                
            });
            return this.transporte;
    }
    
    /**
    * Informs the parent component that the user no longer wants to create an transporte
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
     /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.transporte = new Transporte();
    }



}
