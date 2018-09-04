import { Component, OnInit } from '@angular/core';
import { WeatherService, AuthService } from '../../core/shared/services';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public location: string;
  public currentWeather: any;
  public cityNotFound: boolean;

  constructor(private weatherService: WeatherService, private router: Router,
    private authService: AuthService) {
      this.cityNotFound = false;
    }

  ngOnInit() {
  }

  public getWeather(): void {
    console.log(this.location);
    this.cityNotFound = false;
    this.weatherService.getWeatherByLocation(this.location).subscribe(
      weather => this.currentWeather = weather,
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.authService.logout();
            this.router.navigateByUrl('/login');
            break;
          case 404:
            this.cityNotFound = true;
            break;
          default:
            break;
        }
      });
  }

}
