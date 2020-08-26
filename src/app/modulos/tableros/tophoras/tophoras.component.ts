import { Component, OnInit } from '@angular/core';
import { EsijService } from 'src/app/services/esij.service';
import { Observable } from 'rxjs';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tophoras',
  templateUrl: './tophoras.component.html',
  styleUrls: ['./tophoras.component.scss']
})
export class TophorasComponent implements OnInit {

  
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public topNumber: string = '2';


  constructor(private esijSvc: EsijService) {
    this.fetchDimensions();
    this.fetchOrden();
  }

  dimension$: Observable<any>;
  dimensionSelected: any = {};

  orden$: Observable<any>;
  ordenSelected: any = {};

  ngOnInit() {
    this.dimensionSelected = {
      "codigo": 1,
      "descripcion": "Municipio",
      "valor": "[Dimaula].[Dim Aula Municipio]"
    }

    this.ordenSelected = {
      "codigo": 2,
      "descripcion": "Descendente",
      "valor": "Desc"
    }

    this.getTopHoras(parseInt(this.topNumber), this.ordenSelected.valor, this.dimensionSelected.valor);
  }

  dimensionOnChange($event){
    this.getTopHoras(parseInt(this.topNumber), this.ordenSelected.valor, this.dimensionSelected.valor);
  }

  dimension_OnClear($event){

  }

  fetchDimensions(){
    this.dimension$ = this.esijSvc.getDimensions();
  }

  fetchOrden(){
    this.orden$ = this.esijSvc.getOrden();
  }

  ordenOnChange($event){
    this.getTopHoras(parseInt(this.topNumber), this.ordenSelected.valor, this.dimensionSelected.valor);
  }

  topChange(){
    this.getTopHoras(parseInt(this.topNumber), this.ordenSelected.valor, this.dimensionSelected.valor);
  }

  getTopHoras(topNumber: number, orden: string, dimension: string){
    this.esijSvc.getDataTopN(topNumber, dimension, orden).subscribe((result: any) =>{
      console.log(result);
      this.barChartLabels = result.chartLabels;
      this.barChartData = result.chartData;
    });
  }
}
