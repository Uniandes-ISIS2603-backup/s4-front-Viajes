import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Proveedor} from '../../proveedor/proveedor';
import {ProveedorService} from '../../proveedor/proveedor.service';
@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
   * The list of books to display
   */
  @Input() proveedores: Proveedor[];

  /**
   * The component's constructor
   */
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

  allproveedores: string = 'no';
  /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => {
        this.proveedores = proveedores;
      });
  }

  /**
   * The method which initializes the component
   */
  ngOnInit() {
    this.route.queryParams
      .filter(params => params.allproveedores)
      .subscribe(params => {
        console.log(params);

        this.allproveedores = params.allproveedores;
        console.log(this.allproveedores);
      });
    if (this.allproveedores == 'yes') {
      console.log("allproveedores");

      this.getProveedores();
    }
  }

}
