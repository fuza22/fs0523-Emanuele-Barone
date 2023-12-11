import { WeatherService } from './../services/weather.service';
import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ICityW } from '../pages/auth/Models/i-cityW';
import { IWeathObj } from '../pages/auth/Models/i-weath-obj';
import { PreferitiService } from '../services/preferiti.service';

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

  constructor(private weatherSvc: WeatherService, public preferitiSvc:PreferitiService) { }

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

  getImageUrl(identifier: string): string {
    let imagePath:string;
    switch (identifier.toLowerCase()) {
      case 'clear':
        return '../../assets/clear.webp';
      case 'clouds':
        return '../../assets/cloud.jpeg';
      case 'rain':
        return '../../assets/rainy.jpeg';
      case 'snow':
        return '../../assets/snowy.jpeg';
      default:
        return '../../assets/Screenshot_2023-12-10_alle_12.13.17-removebg-preview.png';
    };
  }

  aggiungiAiPreferiti() {
    const cittaPreferita = this.weatherData?.city.name;
    if (cittaPreferita) {
      this.preferitiSvc.aggiungiAiPreferiti(cittaPreferita);
    }
  }

  rimuoviDaPreferiti() {
    const cittaPreferita = this.weatherData?.city.name;
    if (cittaPreferita) {
      this.preferitiSvc.rimuoviDaPreferiti(cittaPreferita);
    }
  }

  isCittaPreferita(): boolean {
    const cittaPreferita = this.weatherData?.city.name;
    return cittaPreferita ? this.preferitiSvc.getPreferiti().includes(cittaPreferita) : false;
  }

}



