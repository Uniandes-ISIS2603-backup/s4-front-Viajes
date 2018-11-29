import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
import {Actividad} from '../../actividad/actividad';
import {UsuarioDetail} from '../usuario-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from '../../../../node_modules/ngx-toastr';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
  export class UsuarioListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param usuarioService The usuario services provider
     */
    constructor(private usuarioService: UsuarioService,
                private viewRef: ViewContainerRef,
                private modalDialogService: ModalDialogService,
                private toastrService: ToastrService

    ) {}

    /**
     * The list of usuarios in TripBuilder
     */
    usuarios: Usuario[];
    usuario_id: number;
    selectedUsuario: Usuario;

  /**
   * Shows or hides the usuario-create-component
   */
  showCreate: boolean;

  /**
   * Shows or hides the detail of an usuario
   */
  showView: boolean;

  /**
   * Shows or hides the edition of an usuario
   */
  showEdit: boolean;



  /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
      this.usuarioService.getUsuarios()
        .subscribe(usuarios => this.usuarios = usuarios);
    }


  usuarioActual(usuarioId: number): Usuario {

    this.usuario_id = usuarioId;
    this.selectedUsuario = new Usuario();
    this.getUsuariosDetail();
    return this.selectedUsuario;

  }

  getUsuariosDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuario_id)
      .subscribe( selectedUsuario=> {
          this.selectedUsuario = selectedUsuario;
      });
  }


  updateUsuario(): void {
    this.showEdit = false;
    this.showView = true;
  }


  onSelected(usuarioId: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.showView = true;
    this.usuario_id = usuarioId;
    this.selectedUsuario = new UsuarioDetail();
    this.getUsuariosDetail();
  }
  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }


  /**
   * Deletes an usuario
   */
  deleteUsuario(usuarioId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Delete an usuario',
      childComponent: SimpleModalComponent,
      data: {text: '¿Seguro que quieres borrar este usuario?'},
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
              this.toastrService.error('The usuario was successfully deleted', 'Usuario deleted');
              this.ngOnInit();
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
   * Shows or hides the create component
   */
  showHideEdit(usuario_id: number): void {
    if (!this.showEdit || (this.showEdit && usuario_id != this.selectedUsuario.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.usuario_id = usuario_id;
      this.selectedUsuario = new UsuarioDetail();
      this.getUsuariosDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }



    /**
     * This will initialize the component by retrieving the list of usuarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.showCreate = false;
      this.showView = false;
      this.showEdit = false;
      this.selectedUsuario = undefined;
      this.usuario_id = undefined;
      this.getUsuarios();
    }

  }
