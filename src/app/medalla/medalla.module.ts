import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import {MedallaService} from './medalla.service';
import {MedallaListComponent} from './medalla-list/medalla-list.component';
import { MedallaDetailComponent } from './medalla-detail/medalla-detail.component';
import { MedallaCreateComponent } from './medalla-create/medalla-create.component';
import { MedallaEditComponent } from './medalla-edit/medalla-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalDialogModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [MedallaListComponent, MedallaDetailComponent, MedallaCreateComponent, MedallaEditComponent],
  providers :[MedallaService],
  bootstrap: [MedallaListComponent]
})
export class MedallaModule { }
