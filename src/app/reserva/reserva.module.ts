import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservaService} from './reserva.service';
import {ReservaListComponent} from './reserva-list/reserva-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReservaCreateComponent} from './reserva-create/reserva-create.component';
import {ReservaDetailComponent} from './reserva-detail/reserva-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
//        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent
    ],
    providers: [ReservaService],
    exports: [ReservaListComponent]
})
export class ReservaModule {}


