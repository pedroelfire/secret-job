import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';
import { TimelineModule } from 'primeng/timeline';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(){
    addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });
  }
}
