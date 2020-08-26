import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

const URL_BASE = environment.ENDPOINTS.ESIJ.urlBase;

@Injectable({
  providedIn: 'root'
})
export class EsijService {

  constructor(private http: HttpClient) { }

  getDataTopN( topN: number, dimension: string, order: string ){
    return this.http.get(`${URL_BASE}/TopN/${topN}/${dimension}/${order}`).pipe();
  }

  getDimensions(){
    return this.http.get('assets/json/dimensions.json');
  }

  getOrden(){
    return this.http.get('assets/json/orden.json');
  }
}
