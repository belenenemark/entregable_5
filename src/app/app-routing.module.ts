import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLogComponent } from './home-log/home-log.component';
import { HomeNologComponent } from './home-nolog/home-nolog.component';
const routes: Routes = [
  {path:'home-log',component:HomeLogComponent},
  {path:'home-nolog',component:HomeNologComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeLogComponent,HomeNologComponent];
