import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgxPermissionsModule} from 'ngx-permissions';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {UsuarioService} from '../usuario.service';
import {UsuarioDetail} from '../usuario-detail';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers: [DatePipe]
})
export class UsuarioEditComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute

  ) {


  }

  /**
   * The author id as received from the parent component
   */
  @Input() usuario: UsuarioDetail;

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



  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
  };

    formatter = (x: {name: string}) => x.name;

    editUsuario(): void {
      this.usuarioService.updateUsuario(this.usuario)
        .subscribe(() => {
          this.toastrService.success("The user information was updated", "User edition");
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


  ngOnInit() {

    }


  /**
   * This function will be called when the admin chooses another user to edit
   */
  ngOnChanges() {
    this.ngOnInit();
  }

}
