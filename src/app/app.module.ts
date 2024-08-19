import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IonicModule } from '@ionic/angular';
import { CancionesComponent } from './components/canciones/canciones.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [AppComponent, MainPageComponent, CancionesComponent, HistoriaComponent],
  imports: [BrowserModule, AppRoutingModule, TimelineModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
