import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {UsuarioDetail} from '../usuario-detail';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit, OnDestroy {

  /**
   * The usuario
   */
  @Input()usuarioDetail: UsuarioDetail;
  navigationSubscription;
  /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the usuario to be shown
   * @param usuarioService The usuario services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }


  /**
   * El id del usuario que viene en el path get .../usuario/usuario_id
   */
  usuario_id: number;
  /**
   * The method which obtains the author whose details we want to show
   */
  getUsuarioDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuario_id).subscribe(usuarioDetail => {
        this.usuarioDetail = usuarioDetail;
      });
  }


  /**
   * The method which initializes the component.
   * We need to create the author so it is never considered as undefined
   */
  ngOnInit() {
    this.usuario_id = +this.route.snapshot.paramMap.get('id');
    if (this.usuario_id) {
      this.usuarioDetail = new UsuarioDetail();
      this.getUsuarioDetail();
    }
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
