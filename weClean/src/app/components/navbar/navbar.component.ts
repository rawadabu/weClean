import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../header/header.component.css'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    // Add any initialization logic here
  }
  public isModalVisible = false;
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
