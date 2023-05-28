import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
    // Add any initialization logic here
  }
  public isModalVisible = false;
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
