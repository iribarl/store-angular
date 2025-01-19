import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private settings: any;

  constructor(private http: HttpClient) {}

  // Cargar configuración
  loadConfig(): Promise<void> {
    return this.http
      .get('./config.json')
      .toPromise()
      .then(config => {
        this.settings = config;
      })
      .catch(error => {
        console.error('Error al cargar la configuración:', error);
        return Promise.reject(error);
      });
  }

  // Obtener un valor del config
  getSetting(key: string): any {
    return this.settings ? this.settings[key] : null;
  }

}
