import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {


  /**
   * Constructor for the component
   * @param usuarioService The usuario services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(private usuarioService: UsuarioService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  /**
   * El nuevo usuario
   */

  usuario: Usuario;



  /**
   * The output which tells the parent component
   * that the user no longer wants to create an usuario
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new usuario
   */
  @Output() create = new EventEmitter();

  /**
   * Creates an usuario
   */
  createUsuario(): Usuario {
    console.log(this.usuario);
    this.usuarioService.createUsuario(this.usuario)
      .subscribe((usuario) => {
        this.usuario = usuario;
        this.create.emit();
        this.toastrService.success('El usuario fue creado', 'Registro de usuario');
      });
    return this.usuario;
  }
  /**
   * Informs the parent component that the user no longer wants to create an usuario
   */
  cancelCreation(): void {
    this.cancel.emit();
  }

  latitude: number = 18.5204;
  longitude: number = 73.8567;
  map: any;
  ol: any;


  ngOnInit() {
      this.usuario = new Usuario();
      this.map = new this.ol.Map({
      target: 'map',
      layers: [
        new this.ol.layer.Tile({
          source: new this.ol.source.OSM()
        })
      ],
      view: new this.ol.View({
        center: this.ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

}

