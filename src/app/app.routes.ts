import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CanjeComponent } from './pages/canje/canje.component';
import { RetosComponent } from './pages/retos/retos.component';
import { EcopointsComponent } from './pages/ecopoints/ecopoints.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'canje', component: CanjeComponent },
    { path: 'retos', component: RetosComponent },
    { path: 'ecopoints', component: EcopointsComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'perfil', component: PerfilComponent },
   { path: 'footer', component: FooterComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }