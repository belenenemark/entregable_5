import { Component, OnInit, ViewChild,ComponentFactoryResolver } from '@angular/core';
import{DynamicComponent} from '../dynamic/dynamic.component';
import{Dynamic1Component} from '../dynamic1/dynamic1.component';
import{DynamicHostDirective} from '../directive/dynamic-host.directive';

@Component({
  selector: 'app-home-log',
  templateUrl: './home-log.component.html',
  styleUrls: ['./home-log.component.css']
})
export class HomeLogComponent implements OnInit {
  @ViewChild(DynamicHostDirective) public dynamicHost:DynamicHostDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  public createComponent():void{
    console.log("entro al component");
      const component =this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      this.dynamicHost.viewContainerRef.clear();
      this.dynamicHost.viewContainerRef.createComponent(component);
  }
  public createComponent2():void{
    const component =this.componentFactoryResolver.resolveComponentFactory(Dynamic1Component);
    this.dynamicHost.viewContainerRef.clear();
    this.dynamicHost.viewContainerRef.createComponent(component);
}

}
