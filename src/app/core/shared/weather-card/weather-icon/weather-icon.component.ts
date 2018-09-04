import { Component, OnInit, Input } from '@angular/core';
import { WeatherCodes } from '../models/weather-codes.enum';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  @Input() weatherCode: number;
  public weatherCodes = WeatherCodes;

  constructor() {
  }

  ngOnInit() {
  }

}
