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

  constructor(private weatherService: WeatherService, private router: Router,
  private authService: AuthService) { }

  ngOnInit() {
  }

  public getWeather(): void {
    console.log(this.location);
    this.weatherService.getWeatherByLocation(this.location).subscribe(
      weather => this.currentWeather = weather,
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
      });
  }

}
