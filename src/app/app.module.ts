import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarLogComponent } from './nav-bar-log/nav-bar-log.component';
import { FooterLogComponent } from './footer-log/footer-log.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { PruebaflexComponent } from './pruebaflex/pruebaflex.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanesCardComponent } from './planes-card/planes-card.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarLogComponent,
    FooterLogComponent,
    NavBarComponent,
    FooterComponent,
    DynamicHostDirective,
    DynamicComponent,
    Dynamic1Component,
    PruebaflexComponent,
    PlanesComponent,
    PlanesCardComponent,
  ],
  entryComponents:[
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
