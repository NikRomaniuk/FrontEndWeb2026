import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HTTP Client
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root',
})
export class MovieService
{
  // Constructor with Http Client
  // Inject it by ADDING into CONSTRUCTOR args
  constructor(private httpClient : HttpClient)
  {

  } 

  // Get data from movie API
  GetShrekMovieData() : Observable<any> // Return Observable
  {
    // Request data from URL and return it
    return this.httpClient.get("https://www.omdbapi.com/?apikey=ccd404f&s=%27Shrek%27");
  }
}
