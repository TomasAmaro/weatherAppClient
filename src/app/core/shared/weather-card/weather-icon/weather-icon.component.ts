import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  @Input() description: string;
  public sunShower: Array<string>;
  public weatherStatus: number;

  constructor() {
    this.sunShower = ['rainy', 'showers', 'clouds'];
  }

  ngOnInit() {
  }

  public stringIncludes(original: string, included: Array<string>): boolean {
    console.log(original, included);
    for (const string of included) {
      if (original.includes(string)) {
        return true;
      }
    }
    return false;
  }
}
