import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {ProveedorService} from '../proveedor.service';
import {Proveedor} from '../proveedor';
import {ProveedorDetail} from '../proveedor-detail';
import {Vuelo} from '../../vuelo/vuelo';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit, OnDestroy {

  /**
   * The constructor of the component
   * @param bookService The book service which communicates with the API
   * @param route The route which helps to retrieves the id of the book to be shown
   * @param router The router which is needed to know when the component needs to reload
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private viewRef: ViewContainerRef,
    private router: Router,
    private modalDialogService: ModalDialogService,
    private toastrService: ToastrService
  ) {
    //This is added so we can refresh the view when one of the books in
    //the "Other books" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  /**
   * The book's id retrieved from the path
   */
  proveedor_id: number;

  /**
   * The book whose details are shown
   */
  proveedorDetail: ProveedorDetail;

  /**
   * The other books shown in the sidebar
   */
  other_proveedores: Proveedor[];

  /**
   * The suscription which helps to know when a new book
   * needs to be loaded
   */
  navigationSubscription;

  showEdit: boolean;

  /**
   * The method which retrieves the details of the book that
   * we want to show
   */
  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(proveedorDetail => {
        this.proveedorDetail = proveedorDetail;
      });
  }

  /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getOtherProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => {
        this.other_proveedores = proveedores;
        this.other_proveedores = this.other_proveedores.filter(proveedor => proveedor.id !== this.proveedor_id);
      });
  }

  /**
   * This function deletes the book from the BookStore
   */
  deleteProveedor(): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar un proveedor',
      childComponent: SimpleModalComponent,
      data: {text: 'Està seguro de que desea eliminar este proveedor?'},
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.proveedorService.deleteProveedor(this.proveedor_id).subscribe(proveedor => {
              this.toastrService.success('The proveedor  ', 'Proveedor deleted');
              this.router.navigate(['proveedores/list']);
            }, err => {
              this.toastrService.error(err, 'Error');
            });
            return true;
          }
        },
        {text: 'No', onAction: () => true}
      ]
    });
  }

  /**
   * The method which initilizes the component
   * We need to initialize the book and its editorial so that
   * they are never considered undefined
   */
  ngOnInit() {
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    this.proveedorDetail = new class implements ProveedorDetail {
      id: number;
      imagen: string;
      nombre: string;
      password: string;
      puntuacion: number;
      servicios: Vuelo[];
      username: string;
    }
    this.getProveedorDetail();
    this.getOtherProveedores();
    this.showEdit = true;
  }

  /**
   * This method helps to refresh the view when we need to load another book into it
   * when one of the other books in the list is clicked
   */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
