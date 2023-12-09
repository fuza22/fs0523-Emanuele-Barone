import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather'
  private apiKey = '667d2b0720b8d7b399ca631025670a8c';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('limit', '5')
      .set('appid', this.apiKey);

      const apiUrlWithParams = `${this.apiUrl}?${params.toString()}`;
      console.log('API Request:', apiUrlWithParams);

    return this.http.get(apiUrlWithParams);
  }

  getWeatherDetails(cityId: number): Observable<any> {
    const params = new HttpParams()
      .set('id', cityId.toString())
      .set('appid', this.apiKey);

    const apiUrlWithParams = `${this.weatherApiUrl}?${params.toString()}`;
    console.log('Weather API Request:', apiUrlWithParams);

    return this.http.get<any>(apiUrlWithParams);
  }

}



