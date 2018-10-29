import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Proveedor} from '../proveedor';
import {ProveedorService} from '../proveedor.service';

/**
 * The component for the list of proveedores in TripBuilder
 */
@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
   * The list of proveedores in TripBuilder
   */
  @Input() proveedores: Proveedor[];
  /**
   * Constructor of the component
   * @param proveedorService The vuelo services provider
   */
  constructor(private proveedorService: ProveedorService,  private route: ActivatedRoute) {}

  allproveedores:string = 'no';
  /**
   * Asks the service to update the list of proveedores
   */
  getProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => this.proveedores = proveedores);
  }

  /**
   * This will initialize the component by retrieving the list of proveedores from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.route.queryParams
      .filter(params => params.allproveedores)
      .subscribe(params => {
        console.log(params);

        this.allproveedores = params.allproveedores;
        console.log(this.allproveedores);
      });
    if (this.allproveedores == 'yes'){
      console.log("allproveedores");

      this.getProveedores();
    }
  }
}
