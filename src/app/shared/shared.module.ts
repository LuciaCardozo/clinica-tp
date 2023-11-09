import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SharedComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavComponent]
})
export class SharedModule { }
