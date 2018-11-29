import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {VueloService} from '../vuelo.service';
import {VueloDetail} from '../vuelo-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vuelo-calificar',
  templateUrl: './vuelo-calificar.component.html',
  styleUrls: ['./vuelo-calificar.component.css']
})
export class VueloCalificarComponent implements OnInit {

  constructor(
    private vueloService: VueloService,
    private toastrService: ToastrService
  ) {
  }

  /**
   * The author id as received from the parent component
   */
  @Input() vuelo: VueloDetail;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user updated a new author
   */
  @Output() update = new EventEmitter();

  /**
   * Updates the information of the author
   */
  calificarVuelo(): void {
    this.vueloService.updateVuelo(this.vuelo)
      .subscribe(() => {
        this.toastrService.success("The vuelos information was updated", "Vuelo edition");
      });
    this.update.emit();
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelEdition(): void {
    this.cancel.emit();
  }
  /**
   * This function will initialize the component
   */
  ngOnInit() {

  }

  /**
   * This function will be called when the user chooses another author to edit
   */
  ngOnChanges(){
    this.ngOnInit();
  }

}
