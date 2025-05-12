import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
 
  
  slides = [
    { 
      id: 1, 
      image: 'slider1.jpeg',
      alt: 'Slide 1',
      caption: 'Primera imagen del carrusel'
    },
    { 
      id: 2, 
      image: 'slider2.jpeg',
      alt: 'Slide 2',
      caption: 'Segunda imagen del carrusel'
    },
    { 
      id: 3, 
      image: 'slider3.jpeg',
      alt: 'Slide 3',
      caption: 'Tercera imagen del carrusel'
    },
    { 
      id: 4, 
      image: 'slider4.jpeg',
      alt: 'Slide 4',
      caption: 'Cuarta imagen del carrusel'
    }

  ]

  
};

