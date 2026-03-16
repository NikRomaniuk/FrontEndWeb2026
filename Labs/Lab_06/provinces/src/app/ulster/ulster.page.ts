import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class UlsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
