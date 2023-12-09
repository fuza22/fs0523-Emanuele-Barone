import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cityName: string = "";
  weatherData: any[] = [];
  selectedCity: any;
  weatherDetails: any;

  constructor(private weatherService: WeatherService) {}


searchCity() {
  this.weatherService.getWeatherByCity(this.cityName)
    .pipe(
      tap((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      }),
      catchError((error) => {
        console.error('Errore durante la chiamata API:', error);
        throw error;
      })
    )
    .subscribe();
}

selectCity(city: any) {
  this.selectedCity = city;
  console.log(city);

  this.weatherService.getCityDetails(city.id)
    .pipe(
      tap((data) => {
        this.weatherDetails = data;
        console.log('Weather Details:', this.weatherDetails);
      }),
      catchError((error) => {
        console.error('Errore durante la chiamata API del meteo:', error);
        throw error;
      })
    )
    .subscribe();
}
}
