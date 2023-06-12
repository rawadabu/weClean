import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  features = [
    {
      price: '$29',
      period: '/ d',
      icon: 'assets/home-cleaning.png',
      alt: 'Home Cleaning',
      header: 'Home Cleaning Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo viverra maecenas.',
    },
    {
      price: '$49',
      period: '/ d',
      icon: 'assets/business-cleaning.png',
      alt: 'Business Cleaning',
      header: 'Business Cleaning Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Urna molestie at elementum eu facilisis sed odio.',
    },
    {
      price: '$39',
      period: '/ d',
      icon: 'assets/other-cleaning.png',
      alt: 'Other Cleaning',
      header: 'Other Cleaning Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim praesent. Morbi tristique senectus et netus. Nisi porta lorem mollis aliquam ut porttitor leo a diam.',
    },
  ];

  images = [
    { src: 'assets/photo_1.jpeg', alt: 'Photo 1' },
    { src: 'assets/photo_2.jpeg', alt: 'Photo 2' },
    { src: 'assets/photo_3.jpeg', alt: 'Photo 3' },
    { src: 'assets/photo_4.jpeg', alt: 'Photo 4' },
    { src: 'assets/photo_5.jpeg', alt: 'Photo 5' },
    { src: 'assets/photo_6.jpeg', alt: 'Photo 6' },
  ];
}
