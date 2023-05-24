import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/services/scroll-to.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private scrollService: ScrollToService) {}

  @Input() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
    // Add any initialization logic here
  }
  public isModalVisible = false;
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }

  onSelect(section: string): void {
    this.scrollService.scrollTo(section);
  }
}
