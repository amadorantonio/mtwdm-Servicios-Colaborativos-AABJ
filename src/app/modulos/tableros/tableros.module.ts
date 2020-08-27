import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerosComponent } from './tableros.component';
import { TophorasComponent } from './tophoras/tophoras.component';
import { ResumenComponent } from './resumen/resumen.component';
import { TablerosRoutingModule } from './tableros.routes';
import { FormsModule } from '@angular/forms'


import { ChartsModule } from 'ng2-charts'
import { NgSelectModule } from '@ng-select/ng-select';
import { HoursComponent } from 'src/app/components/reports/hours/hours.component';



@NgModule({
  declarations: [
    TablerosComponent, 
    TophorasComponent, 
    ResumenComponent,
    HoursComponent
  ],
  imports: [
    CommonModule,
    TablerosRoutingModule,
    FormsModule,
    ChartsModule,
    NgSelectModule
  ]
})
export class TablerosModule { }
