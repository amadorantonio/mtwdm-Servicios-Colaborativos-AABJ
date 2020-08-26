import { ngModuleJitUrl } from '@angular/compiler'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: 'tableros', loadChildren: () => import('./modulos/tableros/tableros.module').then(m => m.TablerosModule) }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });