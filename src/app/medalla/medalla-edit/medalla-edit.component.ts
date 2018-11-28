import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import {MedallaService} from '../medalla.service';
import {MedallaDetail} from '../medalla-detail';
import {Medalla} from '../medalla';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-medalla-edit',
  templateUrl: './medalla-edit.component.html',
  styleUrls: ['./medalla-edit.component.css']
})
export class MedallaEditComponent implements OnInit {

   /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param authorService The author service which communicates with the API
    * @param editorialService The editorial service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    * @param router The router which is needed to know when the component needs to reload
    * @param route The route which helps to retrieves the id of the book to be shown
    */
    constructor(
        private medallaService: MedallaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
    /**
    * The book which will be updated
    */
    medalla: Medalla;

    medalla_id: number;

    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    }

    formatter = (x: {name: string}) => x.name;

    /**
    * Retrieves the information of the book which will be updated
    */
    getMedalla(): void {
        this.medallaService.getMedallaDetail(this.medalla_id).subscribe(medalla => {
            this.medalla = medalla;
        });
    }

    /**
    * Cancels the edition of the book
    */
    cancelEdition(): void {
        this.toastrService.warning('La medalla no fue editada', 'Editar Medalla');
        this.router.navigate(['/medallas/list']);
    }

    /**
    * This function updates the book
    */
    updateMedalla(): void {

        this.medallaService.updateMedalla(this.medalla).subscribe(() => {
                this.router.navigate(['/medallas/' + this.medalla.id]);
                this.toastrService.success("La medalla fue editada correctamente", 'Editar medalla');
                this.router.navigate(['/medallas/list']);
            });
    }

    /**
    * The function which initilizes the component
    */
    ngOnInit() {
        this.medalla_id = +this.route.snapshot.paramMap.get('id');
        this.getMedalla();
    }

}
