import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeatherByLocation(location: string, units?: string) {
    return this.http.get(`${environment.apiUrl}/weather/city`, {params: {
      location,
      units,
    }});
  }
}
