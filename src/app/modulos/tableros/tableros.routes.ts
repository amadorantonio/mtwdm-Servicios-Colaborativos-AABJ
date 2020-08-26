import { Routes, RouterModule } from '@angular/router'
import { TablerosComponent } from './tableros.component';
import { ResumenComponent } from './resumen/resumen.component';
import { TophorasComponent } from './tophoras/tophoras.component';



const routes: Routes = [
    { path: '', component: TablerosComponent},
    { path: 'resumen', component: ResumenComponent },
    { path: 'tophoras', component:TophorasComponent } 
];

export const TablerosRoutingModule = RouterModule.forChild(routes);