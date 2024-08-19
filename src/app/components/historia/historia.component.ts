import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss'],
})
export class HistoriaComponent  implements OnInit {
  events:any

  constructor() { 
    this.events = [
      { header: 'Primeras interacciones', date: '??/??/????', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'https://lh3.googleusercontent.com/pw/AP1GczP2u5QJLmXHnJsTx8iU9WOaDClySTfhMnuzsgUXHhUqG--hMBPGX3ADtW8R8tiptYQ6ZS3GrSDAGP3fz-1oOQspOaYNPvQqjJ8epr5VNLR7Sc_Qx8SU=w600-h315-p-k' },
      { status: 'Reencuentro', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', image: '../assets/reencuentro.PNG' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
}

  ngOnInit() {}

}
