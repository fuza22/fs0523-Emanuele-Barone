import { WeatherService } from './../services/weather.service';
import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ICityW } from '../pages/auth/Models/i-cityW';
import { ICity, IWeathObj } from '../pages/auth/Models/i-weath-obj';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  searchQuery: string = '';
  cityData: ICityW[] = [];
  weatherData!: IWeathObj | undefined;
  cityName: string = '';
  http: any;
  authService: any;
  buttonDisabled: boolean = true;
  preferitiService: any;

  constructor(private weatherSvc: WeatherService) { }

  findCity() {

    this.weatherData = undefined
    this.weatherSvc.getData(this.cityName)
      .pipe(
        tap((data: ICityW[]) => {
          this.cityData = data;
        }),
        catchError((error) => {
          console.error('Errore durante la chiamata API:', error);
          throw error;
        })
      )
      .subscribe();
  }

  getWeather(lat: number, lon: number) {

    this.cityData = [];
    this.weatherSvc.getCityWeather(lat, lon)
      .pipe(
        tap((data: any) => {
          this.weatherData = data;
        })
      )
      .subscribe();
  }

  isEmpty() {

    this.buttonDisabled = this.cityName.trim() === '';
  }

}
