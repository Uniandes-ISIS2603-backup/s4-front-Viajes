import { Component, OnInit, ViewChild } from '@angular/core';
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

  model: any;
  usuario: UsuarioDetail;
  usuario_id: number;


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
  }

    formatter = (x: {name: string}) => x.name;

    updateUsuario(): void {

     this.usuarioService.updateService(this.usuario)
       .subscribe(()=> {
         this.router.navigate(['/usuarios' + this.usuario_id]);
         this.toastrService.success("Tu información ha sido actualizada!", 'Edición del usuario');
       });
    }


    ngOnInit() {
      this.usuario_id = +this.route.snapshot.paramMap.get('id');
      this.model = new Usuario();
    }




}
