import { Component, OnInit } from '@angular/core';
import planes from '../plan.json';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  public planList:{name:string, description:[],price:string}[] = planes;

  constructor() { }

  ngOnInit(): void {
  }

}
