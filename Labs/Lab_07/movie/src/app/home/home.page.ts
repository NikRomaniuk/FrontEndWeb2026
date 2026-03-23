import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone'; // Import ionic Cards
import { MovieService } from '../services/movie-service'; // Import Movie Service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // Update this import list on the way!
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage
{
  // Declare variables
  movies : any[] = []; // Almost every JSON API is an array of objects

  // Constructor with Movie Service
  // Inject it by ADDING into CONSTRUCTOR args
  constructor(private service : MovieService) {}

  ionViewWillEnter()
  {
    // Get Instance of Movie Service
    // Subscribe to listen for callback function
    this.service.GetShrekMovieData().subscribe(
      (data) => {
        this.movies = data.Search;
        console.log(this.movies); // Print out to the console
      }
    );
  }
}
