import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('srvElement') element: { type: string } | undefined;
  // Exposing this property to the world
  // So any other parent component hosting our server, is now able to bind the element.

  //'srvElement' uses as an alias, to have it outside of that component.

  ngOnInit(): void {}

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
