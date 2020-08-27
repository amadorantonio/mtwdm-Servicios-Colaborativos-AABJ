import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EsijService } from 'src/app/services/esij.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  constructor(private esijSvc: EsijService) {
    this.fetchAnio();
    this.fetchMeses();
  }

  anios$: Observable<any>;
  aniosSelected: any = {};
  meses$: Observable<any>;
  mesesSelected: any = {};
  stringMeses: string = '';
  stringAnios: string = '';
  lblInscritos: string = '';

  ngOnInit() {
    
  }

  fetchAnio() {     
    this.esijSvc.getAnios().subscribe((result: any) => {             
      this.anios$ = result.anios;
    });   
  }

  aniosOnChange($event){
    this.stringAnios = '';
    for (var i=0; i < this.aniosSelected.length; i++)
    {
        if(i == 0){
          this.stringAnios += this.aniosSelected[i].anioValue;
        }
        else{
          this.stringAnios += ',' + this.aniosSelected[i].anioValue;
        }
    }
    this.getInscritosAnioMes();
  }

  fetchMeses(){
    this.esijSvc.getMeses().subscribe((result: any) => {
      this.meses$ = result.meses;
    });
  }

  mesesOnChange($event){
    this.stringMeses = '';
    for (var i=0; i < this.mesesSelected.length; i++)
    {
        if(i == 0){
          this.stringMeses += this.mesesSelected[i].mesValue;
        }
        else{
          this.stringMeses += ',' + this.mesesSelected[i].mesValue;
        }
        console.log(this.stringMeses);
    }
    this.getInscritosAnioMes();
  }

  getInscritosAnioMes(){
    if(this.stringAnios == ''){
      this.stringAnios = '0';
    }
    
    if(this.stringMeses == ''){
      this.stringMeses = '0';
    }

    this.esijSvc.inscritosAnioMes(this.stringAnios, this.stringMeses).subscribe((result: any) => {
      this.lblInscritos = result;
    });
  }

}
