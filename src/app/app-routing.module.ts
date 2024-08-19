import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { HistoriaComponent } from './components/historia/historia.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'canciones',component:CancionesComponent},
  {path:'historia',component:HistoriaComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
