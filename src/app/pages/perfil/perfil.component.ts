import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
// Puedes colocarlo dentro del método ngOnInit() de tu componente
ngOnInit(): void {
  const nombre: string = localStorage.getItem("nombre") || "Sin nombre";
  const correo: string = localStorage.getItem("correo") || "Sin correo";
  const foto: string = localStorage.getItem("foto") || "https://via.placeholder.com/150";
  const puntos: string = localStorage.getItem("ecopoints") || "0";

  const nameEl = document.getElementById("displayName");
  const emailEl = document.getElementById("displayEmail");
  const pointsEl = document.getElementById("displayPoints");
  const imageEl = document.getElementById("profileImage") as HTMLImageElement | null;

  if (nameEl) nameEl.textContent = nombre;
  if (emailEl) emailEl.textContent = correo;
  if (pointsEl) pointsEl.textContent = puntos;
  if (imageEl) imageEl.src = foto;
  };
}
