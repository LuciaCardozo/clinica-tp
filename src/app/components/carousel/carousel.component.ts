import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousels:any[]=[
    {img:'https://i.pinimg.com/originals/ca/42/71/ca4271ae604c068e91c7b261837e11ea.jpg',
    name:"Consultorio",
    description:"Para preguntar todas tus dudas"},
    {img:`https://www.redaccionmedica.com/images/destacados/los-ocho-trucos-que-se-deben-seguir-para-humanizar-la-sala-de-espera--4514_620x368.jpg`,
    name:"Sala de espera",
    description:"con las mejores comodidades para nuestros clientes"},
    {img:`https://avellaneda.gob.ar/wp-content/uploads/2021/05/hisopados-aire-libre-2.jpg`,
    name:"Test Covid-19",
    description:"Resultados en 24hs"},
    {img:`https://us.123rf.com/450wm/uatp2/uatp21503/uatp2150300476/37730510-interior-de-la-sala-de-hospital-con-equipo-de-ultrasonido.jpg?ver=6`,
    name:"Ecografias",
    description:"A partir de 24 semanas podras realizarte la eco 4D"}
  ]
  constructor( private configCarousel:NgbCarouselConfig) { 
    configCarousel.interval = 5000;
  }

  ngOnInit(): void {
  }

}
