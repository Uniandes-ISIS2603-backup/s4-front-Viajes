import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoService} from './pago.service';
import {PagoListComponent} from './pago-list/pago-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PagoCreateComponent} from './pago-create/pago-create.component';
import {PagoDetailComponent} from './pago-detail/pago-detail.component';

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
        PagoListComponent, PagoDetailComponent, PagoCreateComponent
    ],
    providers: [PagoService],
    exports: [PagoListComponent]
})
export class PagoModule {}


