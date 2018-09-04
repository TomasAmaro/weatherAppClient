import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private router: Router) { }

  public getWeatherByLocation(location: string, units?: string) {
    return this.http.get(`${environment.apiUrl}/weather/city`, {params: {
      location,
      units,
    }});
  }
}
