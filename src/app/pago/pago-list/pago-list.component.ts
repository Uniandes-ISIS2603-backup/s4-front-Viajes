import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Pago} from '../../pago/pago';
import {PagoService} from '../../pago/pago.service';
@Component({
    selector: 'app-pago-list',
    templateUrl: './pago-list.component.html',
    styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

    /**
    * The list of reservas to display
    */
    @Input() pagos: Pago[];

    /**
    * The component's constructor
    */
    constructor(private pagoService: PagoService, private route: ActivatedRoute) {}

    allpagos: string = 'no';
    /**
    * This method retrieves all the reservas to show them in the list
    */
    getPagos(): void {
        this.pagoService.getPagos()
            .subscribe(pagos => {
                this.pagos = pagos;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allpagos)
            .subscribe(params => {
                console.log(params);

                this.allpagos = params.allpagos;
                console.log(this.allpagos);
            });
        if (this.allpagos == 'yes') {
            console.log("allpagos");

            this.getPagos();
        }
    }

}
