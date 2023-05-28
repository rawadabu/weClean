import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.0s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {}

  activeTab = 1; // Default is the first tab

  selectTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
}
