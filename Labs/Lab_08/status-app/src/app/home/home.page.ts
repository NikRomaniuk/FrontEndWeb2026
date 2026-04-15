import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/angular/standalone';
// --- Newly Imported Services ---
import { RouterLink } from '@angular/router'; // Import URL/Routing Service
import { Storage } from '@ionic/storage-angular'; // Import Storage Service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, RouterLink],
})
export class HomePage {
  // Store status
  status : string = "";

  // Constructor with Storage instance
  // Inject it by ADDING into CONSTRUCTOR args
  constructor(private storage : Storage) { }

  // Do it every time we enter this page
  // Async method to make sure we won't go further through the Program without executing it
  async ionViewWillEnter()
  {
    await this.storage.create(); // Check if storage is null; Null -> Create new; !Null -> Skip
    // Get the data from disk
    this.status = await this.storage.get('myStatus') // Get data from Storage by Key -> Update Status on this page with this data
  }
}
