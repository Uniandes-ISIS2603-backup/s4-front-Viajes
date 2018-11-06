import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedallaService } from '../medalla.service';
import { Medalla } from '../medalla';

@Component({
  selector: 'app-medalla-create',
  templateUrl: './medalla-create.component.html',
  styleUrls: ['./medalla-create.component.css']
})
export class MedallaCreateComponent implements OnInit {

  constructor(
        private medallaService: MedallaService,
        private toastrService: ToastrService) { }


  /**
   * The new medalla
   */
   medalla: Medalla;
   
   createMedalla(): Medalla {
        this.medallaService.createMedalla(this.medalla)
            .subscribe((medalla) => {
                this.medalla = medalla;
                this.create.emit();
                this.toastrService.success("La medalla fue creada satisfactoriamente", "Creación de medalla");                
            });
            return this.medalla;
    }
    
    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    cancelCreation(): void {
        this.cancel.emit();
    }
    
  ngOnInit() {
       this.medalla = new class implements Medalla {
         descripcion: string;
         id: number;
         nombre: string;
         rutaImagen: string;
       }
  }

}
