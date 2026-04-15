import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from '@ionic/angular/standalone';
// --- Newly Imported Services ---
import { RouterLink } from '@angular/router'; // Import URL/Routing Service
import { Storage } from '@ionic/storage-angular'; // Import Storage Service

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton]
})
export class StatusPage implements OnInit {
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

  // Status button click handler
  // Async method
  async saveStatus()
  {
    console.log(this.status) // Debug Log
    await this.storage.create(); // Check if storage is null; Null -> Create new; !Null -> Skip
    // Write the data into disk
    await this.storage.set('myStatus', this.status) // Store status variable contents into Storage under "myStatus" key
  }

  ngOnInit() {
  }

}
