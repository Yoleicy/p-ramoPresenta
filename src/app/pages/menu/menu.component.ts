import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuOpen = false;
  dropdownOpen = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  /*
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
      */
    
}


