import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedallaListComponent } from './medalla-list/medalla-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedallaListComponent],
  exports :[MedallaListComponent]
})
export class MedallaModule { }
