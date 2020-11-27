import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLogComponent } from './home-log/home-log.component';
import { HomeNologComponent } from './home-nolog/home-nolog.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
const routes: Routes = [
  {path:'home-log',component:HomeLogComponent},
  {path:'home-nolog',component:HomeNologComponent},
  {path:'iniciar-sesion',component:SesionComponent},
  {path:'registrarse',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeLogComponent,HomeNologComponent,SesionComponent];
