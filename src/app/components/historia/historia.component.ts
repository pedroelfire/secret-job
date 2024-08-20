import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss'],
})
export class HistoriaComponent implements OnInit {
  events: any;

  constructor() {
    this.events = [
      {
        header: 'Primeras interacciones',
        date: '??/??/????',
        description:
          'La verdad no recuerdo cuando estabamos en la primaria, ni puedo encontrar alguna foto de nosotros, lo unico que recuerdo es que me odiabas y estavas muy guapa. (Una foto de pedrin chikin)',
        color: '#9C27B0',
        image:
          'https://lh3.googleusercontent.com/pw/AP1GczP2u5QJLmXHnJsTx8iU9WOaDClySTfhMnuzsgUXHhUqG--hMBPGX3ADtW8R8tiptYQ6ZS3GrSDAGP3fz-1oOQspOaYNPvQqjJ8epr5VNLR7Sc_Qx8SU=w600-h315-p-k',
      },

      {
        header: 'Reencuentro',
        date: '16/04/2021',
        description:
          'Despues de zorrearte en tu perfil y ver que estabas muy guapa (y que desafortunadamente tenias una relacion), me mandaste mensaje, lo que provoco que pensara: "Ya chingue paleta 😈 "',
        color: '#673AB7',
        image: '../assets/reencuentro.PNG',
      },

      {
        header: 'Boda de Hermanote',
        description:
          'Una noche inolvidable, donde de una manera muy romantica y especial te seduje a que me dieras un beso despues de una copa, \n donde bailamos y vimos a mi tio destapar una coca-cola que era en realidad una cerveza (inolvidable)',
        date: '06/06/2021',
        image: '../assets/Boda.jpg',
        color: '#FF9800',
      },

      {
        header: 'Revelacion',
        description:
          'De manera nada toxica y totalmente persuasiva, te lleve a que me revelaras que te gustaba (aunque me obligaras revelarlo a mi primero 😡), una foto antes de la que para ti por un momento fue una tragedia.',
        date: '07/08/2021',
        image: '../assets/Revelacion.jpg',
        color: '#FF9800',
      },

      {
        header: 'Nuestra primer mordida',
        description:
          'XD',
        date: '12/08/2021',
        image: '../assets/Mordida.jpg',
        color: '#FF9800',
      },

      {
        header: 'El dia de la noviacion',
        description:
          'El dia en el que decidi pedirte que fueras mi novia, un momento muy impoortante para mi, desde este momento indiscutiblemente mi vida mejoro y se volvio mas feliz, te amo princesa. (Me la mame con la carta XD)',
        date: '21/08/2021',
        image: '../assets/Carta.jpeg',
        color: '#FF9800',
      },

      {
        header: 'Nuestra primera dormicion',
        description:
          'Este dia despues de ir a 80 k/h y comerme un bordo como si fuera una vergota, dormimos por primera vez juntitos, una experiencia que me encanto, y donde me di cuenta que contigo me siento super agusto y seguro, por eso te amo nalgona',
        date: '20/05/2022',
        image: '../assets/Dormicion.jpg',
        color: '#FF9800',
      },

      {
        header: 'Nos jalamos pal antro',
        description:
          'Esta vez fuimos por primera vez al antro, donde tuvo que ir mi mama a recogernos y vomitamos una banca en la cancha, poetico',
        date: '20/05/2022',
        image: '../assets/Antro.jpg',
        color: '#FF9800',
      },

      {
        header: 'Nuestro primer concierto',
        description:
          'Cuando fuimos a ver a santa fe, y habia unos malechores bailando a nuestra izquierda, fue algo muy divertido, jamas me hubiera animado si no fuera por mi noviecita guapa (Como amo a mi guapa noviecita, y no voy a poner cuando fuimos a ver al meco pendejo estupido insipido N&E de alfredo) ',
        date: '18/07/2022',
        image: '../assets/Concierto.jpg',
        color: '#FF9800',
      },

      {
        header: 'Primeras vacaciones juntos',
        description:
          'Nuestras primeras vacaciones juntos, donde me la pase super chingon contigo, y aunque no nos puedieramos subir al bote, estuve contigo en todo momento, y eso me hizo el mas feliz. (Como amo a mi chikinunis)',
        date: '22/07/2023',
        image: '../assets/Vacaciones.jpg',
        color: '#FF9800',
      },

      {
        header: 'Nuestro segundo aniversario',
        description:
          'Sorprendentemente no encontre fotos del primero, pero si esta del segundo, una linda foto que refleja nuestros roles en la relacion (Niño bien portado y Monstruo de las Gallets)',
        date: '21/08/2023',
        image: '../assets/2do_aniversario.jpg',
        color: '#FF9800',
      },

      {
        header: 'Tu enojo No.170909',
        description:
          'Fue un momento sorprendente, ya que solo existi y sucedio, como otras 170908 veces, se me salio una lagrima de la emocion (Como amo a mi berrinchuda)',
        date: '01/03/2024',
        image: '../assets/Berrinche.jpg',
        color: '#FF9800',
      },

      {
        header: 'El momento mas tenso de nuestra relacion',
        description:
          'En este momento, lo unico que podia pensar era "Ojala que si le salgan sus pancackes si no me va a pegar", te encontrabas muy estresada y preocupada de perder tu jale',
        date: '18/03/2024',
        image: '../assets/Tenso.jpg',
        color: '#FF9800',
      },

      {
        header: 'El hoy por hoy',
        description:
          'A dia de hoy soy el mas feliz de estar a tu lado, te amo y eres la persona mas importante en mi vida, me llenas de motivacion amor y cosas linda, me hace sentir bien y amo todo de ti, desde tu carita y lentesitos hasta tus pies(rico), te amo demasiado y me encanta que nos encante nuestra compañia mutuamente, estos 3 años contigo han sido espectaculares y espero que podamos pasar 7 años mas de noviesitos(Pq para esa edad ya nos vamos a casar)' ,
        date: '21/08/2024',
        image: '../assets/Hoy.jpg',
        color: '#FF9800',
      },


    ];
  }

  ngOnInit() {}
}
