import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IonicModule } from '@ionic/angular';
import { CancionesComponent } from './components/canciones/canciones.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, CancionesComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
