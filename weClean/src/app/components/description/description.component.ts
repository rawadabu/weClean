import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  @Input('srvElement') element: { type: string } | undefined;
  // Exposing this property to the world
  // So any other parent component hosting our server, is now able to bind the element.

  //'srvElement' uses as an alias, to have it outside of that component.

  ngOnInit(): void {}
}
