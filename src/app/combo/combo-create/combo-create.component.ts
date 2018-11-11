import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ComboService} from '../combo.service';
import {Combo} from '../combo';

@Component({
    selector: 'app-combo-create',
    templateUrl: './combo-create.component.html',
    styleUrls: ['./combo-create.component.css'],
    providers: [DatePipe]
})
export class ComboCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comboService The books' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private comboService:ComboService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new book
    */
    combo: Combo;

   
    /**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The combo wasn\'t created', 'Combo creation');
        this.router.navigate(['/combos/list']);
    }

    /**
    * Creates a new book
    */
    createCombo(): Combo {
        this.combo.costo=0;
        this.combo.dias=0;
        this.combo.horas=0;
        this.combo.puntuacion=0;
        this.combo.id=0;
        this.comboService.createCombo(this.combo)
            .subscribe(combo => {
                this.combo.id = combo.id;
                this.router.navigate(['/combos/' + combo.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.combo;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.combo = new Combo();
    }

}
