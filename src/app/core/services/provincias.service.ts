import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private httpClient: HttpClient) { }

  obtenerProvincias(): any {
    return this.httpClient.get('assets/data/provincias.json');
  }
}
