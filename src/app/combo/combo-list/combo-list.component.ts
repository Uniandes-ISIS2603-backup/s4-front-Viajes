import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Combo} from '../../combo/combo';
import {ComboService} from '../../combo/combo.service';
@Component({
    selector: 'app-combo-list',
    templateUrl: './combo-list.component.html',
    styleUrls: ['./combo-list.component.css']
})
export class ComboListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() combos: Combo[];

    /**
    * The component's constructor
    */
    constructor(private comboService: ComboService, private route: ActivatedRoute) {}

    allcombos: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getCombos(): void {
        this.comboService.getCombos()
            .subscribe(combos => {
                this.combos = combos;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allcombos)
            .subscribe(params => {
                console.log(params);

                this.allcombos = params.allcombos;
                console.log(this.allcombos);
            });
        if (this.allcombos == 'yes') {
            console.log("allcombos");

            this.getCombos();
        }
    }

}
