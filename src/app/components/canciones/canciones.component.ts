import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss'],
})

export class CancionesComponent  implements OnInit {

  isToastOpen: boolean = false

  constructor() { }

  ngOnInit() {}

  showMessage() {
    console.log("Hola")
    this.isToastOpen = true;
  }
}

