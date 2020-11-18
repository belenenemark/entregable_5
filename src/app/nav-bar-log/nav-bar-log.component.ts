import { Component, OnInit, ViewChild,ComponentFactoryResolver } from '@angular/core';
import{DynamicComponent} from '../dynamic/dynamic.component';
import{DynamicHostDirective} from '../directive/dynamic-host.directive';
import{Dynamic1Component} from '../dynamic1/dynamic1.component';

@Component({
  selector: 'app-nav-bar-log',
  templateUrl: './nav-bar-log.component.html',
  styleUrls: ['./nav-bar-log.component.css']
})
export class NavBarLogComponent implements OnInit {
  @ViewChild(DynamicHostDirective) public dynamicHost:DynamicHostDirective;
 
  constructor(private componentFactoryResolver:ComponentFactoryResolver) {
    
   }

  ngOnInit(): void {
   
  }
  
   public createComponent():void{
   console.log("llega hasta aca el click");
   this.dynamicHost.viewContainerRef.clear();
   const component =this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
  this.dynamicHost.viewContainerRef.createComponent(component);

}
public createComponent2():void{
  this.dynamicHost.viewContainerRef.clear();
  const component =this.componentFactoryResolver.resolveComponentFactory(Dynamic1Component);
  this.dynamicHost.viewContainerRef.createComponent(component);
  
}
}
