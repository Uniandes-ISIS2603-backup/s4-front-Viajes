import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-usuario-entradas',
  templateUrl: './usuario-entradas.component.html',
  styleUrls: ['./usuario-entradas.component.css']
})
export class UsuarioEntradasComponent implements OnInit {

      @Input() usuarioEntradas : Entrada [];
    public isCollapsed = true;
    
    ngOnInit(){
        
    }

}
