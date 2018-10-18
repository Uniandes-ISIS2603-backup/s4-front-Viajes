import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueloListComponent } from '../Vuelo/vuelo-list/vuelo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VueloListComponent],
    exports:[VueloListComponent]
})
export class VueloModule { }
