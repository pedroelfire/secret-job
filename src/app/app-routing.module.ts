import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CancionesComponent } from './components/canciones/canciones.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'canciones',component:CancionesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
