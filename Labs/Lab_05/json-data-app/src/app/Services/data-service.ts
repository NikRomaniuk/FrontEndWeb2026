// Service class (used by other classes)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HTTP Client
import { Observable } from 'rxjs'; // Import Observable

@Injectable
({
  providedIn: 'root',
})

export class DataService
{
  // Constructor with Http Client
  // Inject it by ADDING into CONSTRUCTOR
  constructor(private httpClient : HttpClient){}

  // Get data from students API
  GetStudentData() : Observable<any> // Return Observable
  {
    // Get data from URL and return it
    return this.httpClient.get("https://api.jsonblob.com/019cadd4-39a3-7297-a08d-17dc18b8e4f4")
  }

  // Get data from weather API
  GetWeatherData() : Observable<any> // Return Observable
  {
    // Get data from URL and return it
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=Dublin&APPID=e9cd2e25104a7a53e42e3f8318814d6c")
  }
}
