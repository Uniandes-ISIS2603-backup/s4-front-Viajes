import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComboService} from './combo.service';
import {ComboListComponent} from './combo-list/combo-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComboReservaComponent} from './combo-reservas/combo-reserva.component';
import {ComboCreateComponent} from './combo-create/combo-create.component';
import {ComboDetailComponent} from './combo-detail/combo-detail.component';
import {ComboAddReservaComponent} from './combo-add-reserva/combo-add-reserva.component';

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
        ComboListComponent, ComboDetailComponent, ComboReservaComponent, ComboCreateComponent, ComboAddReservaComponent
    ],
    providers: [ComboService],
    exports: [ComboListComponent]
})
export class ComboModule {}
