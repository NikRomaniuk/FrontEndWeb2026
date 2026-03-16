import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton]
})
export class LeinsterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit()
  {

  }

  onButtonClick()
  {
    this.router.navigate(['/leinster-counties'])
  }
}
