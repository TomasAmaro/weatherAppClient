import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Services from './services';
import { WeatherIconComponent } from './weather-card/weather-icon/weather-icon.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  declarations: [
    WeatherCardComponent,
    NavbarComponent,
    WeatherIconComponent,
  ],
  exports: [
    WeatherCardComponent,
    NavbarComponent,
    WeatherIconComponent,
  ],
  providers: [
    Services.WeatherService,
    Services.StorageService,
    Services.AuthService,
    Services.UserService,
  ]
})
export class SharedModule { }
