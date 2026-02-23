// Include thoose libraries
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent'; // List Componenet reference

// Main App Component Metadata
@Component({
  selector: 'root-directive', // How it can be called
  imports: [RouterOutlet, Listcomponent], // Extra Component used in this one
  templateUrl: './app.html', // Markup reference
  styleUrl: './app.css' // Style reference
})

// Main App Component Logic
export class App
{
  clicks: number = 0; // amount of button clicks
  look: boolean = true; // Flag for showing the h2

  // --- Event Handlers ---
  // Handles single clicks for button
  onButtonClick()
  {
    this.clicks += 1; // Increment
  }

  // Handles double clicks for button
  onDoubleClick()
  {
    this.look = !this.look; // Inverse
  }
}
