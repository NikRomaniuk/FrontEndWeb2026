// Include thoose libraries
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponenet } from './acomponenet/acomponenet'; // AComponenet reference
import { BComponenet } from './bcomponenet/bcomponenet'; // BComponenet reference

// Main App Componenet Metadata
@Component({
  selector: 'root-directive', // How it can be called
  imports: [RouterOutlet, AComponenet, BComponenet], // Extra Components used in this one
  templateUrl: './app.html', // Markup reference
  styleUrl: './app.css' // Style reference
})

// Main App Componenet Logic
export class App {
  msg: string = "\"Hello World\"";
  num: number = 42;
}
