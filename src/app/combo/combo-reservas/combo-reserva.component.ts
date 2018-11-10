import { Component, OnInit, Input, } from '@angular/core';
import { Reserva } from '../../reserva/reserva';

@Component({
    selector: 'app-combo-reservas',
    templateUrl: './combo-reserva.component.html',
})
export class ComboReservaComponent implements OnInit {
    @Input() comboReservas : Reserva [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateReservas(reservas:Reserva[]): void {
        this.comboReservas = reservas;
    }
    
    ngOnInit(){
    }
}



