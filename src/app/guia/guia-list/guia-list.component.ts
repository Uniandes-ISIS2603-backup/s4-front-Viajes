import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guia } from '../guia';
import { GuiaService } from '../guia.service';

/**
 * The component for the list of activities in TripBuilder
 */
@Component({
    selector: 'app-guia-list',
    templateUrl: './guia-list.component.html',
    styleUrls: ['./guia-list.component.css']
})
export class GuiaListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param TripBuilder The guide's services provider
     */
    constructor(private guiaService: GuiaService, private route: ActivatedRoute) { }

    /**
     * The list of guides in TripBuilder
     */
    @Input() guias: Guia[];
   
    /**
     * Asks the service to update the list of activities
     */
    getGuias(): void {
        this.guiaService.getGuias()
            .subscribe(guias => this.guias = guias);
    }

    /**
     * This will initialize the component by retrieving the list of activities from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
   
       this.getGuias();
       
    
        
    }
}





