import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CanjeComponent } from './pages/canje/canje.component';
import { RetosComponent } from './pages/retos/retos.component';
import { EcopointsComponent } from './pages/ecopoints/ecopoints.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { FooterComponent } from './pages/footer/footer.component';


export const routes: Routes = [
    {path: '', component: InicioComponent},
    { path: 'menu', component: MenuComponent },
    { path: 'canje', component: CanjeComponent },
    { path: 'retos', component: RetosComponent },
    { path: 'ecopoints', component: EcopointsComponent },
    { path: 'mapa', component: MapaComponent },
   { path: 'footer', component: FooterComponent },

];
