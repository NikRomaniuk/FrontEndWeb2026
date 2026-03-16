import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton]
})
export class LeinsterCountiesPage implements OnInit
{
  // --- Variables ---
  // An array of counties
  counties: string[] = ["Carlow", "Dublin", "Kildare","Kilkenny",
                        "Laois", "Longford", "Louth", "Meath",
                        "Offaly", "Westmeath", "Wexford", "Wicklow"];


  constructor() { }

  ngOnInit() {
  }

}
