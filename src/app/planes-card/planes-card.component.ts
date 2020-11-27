import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-planes-card',
  templateUrl: './planes-card.component.html',
  styleUrls: ['./planes-card.component.css']
})
export class PlanesCardComponent implements OnInit {
  @Input() item:{name:string, description:[],price:string};
  

  constructor() { }

  ngOnInit(): void {
  }

}
