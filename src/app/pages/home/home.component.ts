import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../core/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public location: string;
  public currentWeather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  public getWeather(): void {
    console.log(this.location);
    this.weatherService.getWeatherByLocation(this.location).subscribe(weather => this.currentWeather = weather);
  }

}
