import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActividadService } from '../actividad.service';

import { ActividadDetail } from '../actividad-detail';
import { Actividad } from '../actividad';


@Component({
    selector: 'app-actividad-detail',
    templateUrl: './actividad-detail.component.html',
    styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {

    /**
    * The activity
    */
    @Input() actividadDetail: ActividadDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the activity to be shown
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private actividadService: ActividadService 
    ) { }


    /**
    * El id de la actividad que viene en el path get .../actividad/actividad_id
    */
    actividad_id: number;
    /**
    * The method which obtains the author whose details we want to show
    */
    getActividadDetail(): void {
        this.actividadService.getActividadDetail(this.actividad_id)
            .subscribe(actividadDetail => {
                this.actividadDetail = actividadDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
    ngOnInit() {
        this.actividad_id = +this.route.snapshot.paramMap.get('identificador');
        if (this.actividad_id){
        this.actividadDetail = new ActividadDetail();
        this.getActividadDetail();
        }
    }
}