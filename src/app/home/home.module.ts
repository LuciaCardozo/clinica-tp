import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CardComponent } from '../components/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
