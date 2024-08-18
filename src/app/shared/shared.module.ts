import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { CancionesComponent } from '../components/canciones/canciones.component';



@NgModule({
  declarations: [
    MainPageComponent,
    
  ],
  imports: [
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }
