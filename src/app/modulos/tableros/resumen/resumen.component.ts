import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EsijService } from 'src/app/services/esij.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  constructor(private esijSvc: EsijService) {}

  lblInscritos: string = '';

  ngOnInit() {
    this.esijSvc.getTotalInscritos().subscribe((result: any) => {
      this.lblInscritos = result;
    });
  }
}
