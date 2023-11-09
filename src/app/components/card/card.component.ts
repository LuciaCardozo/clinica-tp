import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() img:any;
  @Input() title:any;
  @Input() text:any;
  constructor() { }

  ngOnInit(): void {
  }

}
