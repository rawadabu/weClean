import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() featureSelected = new EventEmitter<string>();
  @Output() openModal: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    // Add any initialization logic here
  }

  public isModalVisible = false;
  toggleModal(): void {
    this.openModal.emit();
  }
}
