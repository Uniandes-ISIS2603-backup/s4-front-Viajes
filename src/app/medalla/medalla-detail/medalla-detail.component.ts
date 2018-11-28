import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {MedallaService} from '../medalla.service';
import {Medalla} from '../medalla';
import {MedallaDetail} from '../medalla-detail';

@Component({
  selector: 'app-medalla-detail',
  templateUrl: './medalla-detail.component.html',
  styleUrls: ['./medalla-detail.component.css']
})
export class MedallaDetailComponent implements OnInit, OnDestroy {

  constructor(
    private medallaService: MedallaService,
    private route: ActivatedRoute,
    private router: Router,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {    
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    }); }

  /**
   * The book whose details are shown
   */
  @Input() medallaDetail: MedallaDetail;
  medalla_id: number;

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
  getMedallaDetail(): void {
    this.medallaService.getMedallaDetail(this.medalla_id)
      .subscribe(medallaDetail => {
        this.medallaDetail = medallaDetail;
      });

  }
  
    /**
* This function deletes the book from the BookStore 
*/
    deleteMedalla(): void {

        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar una medalla',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar esta medalla?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.medallaService.deleteMedalla(this.medalla_id).subscribe(medalla => {
                            this.toastrService.success("La medalla  ", "Medalla eliminada");
                            this.router.navigate(['medallas/list']);
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

  ngOnInit() {
    this.medalla_id = +this.route.snapshot.paramMap.get('id');
    this.medallaDetail = new class implements MedallaDetail {
      nombre: string;
      id: number;
      descripcion: string;
      rutaImagen: string;
    }
    this.getMedallaDetail();
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
