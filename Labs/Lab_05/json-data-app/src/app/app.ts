// App component class
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service'; // Import our custom Service

@Component
({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit
{
  // Declare variables
  students : any[] = [];
  weather : any[] = [];

  // Constructor with Data Service
  // Inject it by ADDING into CONSTRUCTOR
  constructor(private dataService : DataService)
  {

  }

  // On Initilize event handler
  ngOnInit(): void
  {
    // Get Instance of Data Service
    // Subscribe to listen for callback function
    this.dataService.GetStudentData().subscribe
    (
      (data) => {
          this.students = data.students;
          console.log(this.students) // Print out something
        }
    );

    // Get Instance of Data Service
    // Subscribe to listen for callback function
    this.dataService.GetWeatherData().subscribe
    (
      (data) => {
          this.weather = data.weather;
          console.log(this.weather) // Print out something again
        }
    );
  }
}
