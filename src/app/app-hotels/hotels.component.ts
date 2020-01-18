import { Component } from '@angular/core';
import { IHotels } from './interface/hotels';
import { IStars } from './interface/stars';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  public favoriteHotels: IHotels[] = [];

  public stars: IStars[] = [
    {
      value: 0,
      class: 'all-hotels',
      text: 'All'
    },
    {
      value: 3,
      class: 'three-stars'
    },
    {
      value: 4,
      class: 'four-stars'
    },
    {
      value: 5,
      class: 'five-stars'
    },
  ];
  public hotels: IHotels[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather: {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: '/assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        '/assets/images/res.jpg',
        '/assets/images/r1.jpg'
      ],
      weather: {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: '/assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpg',
      photos: [
        '/assets/images/res.jpg',
        '/assets/images/r1.jpg'
      ],
      weather: {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: '/assets/images/b3.jpg'
      },
      stars: 5
    },
    {
      id: 3,
      title: 'Cats Home',
      address: 'Kyiv',
      description: 'Hotels with cats',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        '/assets/images/res.jpg',
        '/assets/images/r1.jpg'
      ],
      weather: {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: '/assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 4,
      title: 'Hillton',
      address: 'NY',
      description: 'Best Hotel',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        '/assets/images/res.jpg',
        '/assets/images/r1.jpg'
      ],
      weather: {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: '/assets/images/b2.jpg'
      },
      stars: 5
    },
    {
      id: 5,
      title: 'Berloga plaza',
      address: 'Zashkow',
      description: 'For one night',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        '/assets/images/res.jpg',
        '/assets/images/r1.jpg'
      ],
      weather: {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: '/assets/images/b2.jpg'
      },
      stars: 3
    }
  ];

  public selectedHotel: IHotels = this.hotels[0];

  public currentStars: number = 0;

  public displayedHotels: IHotels[] = this.hotels;

  public onSelectHotel (hotel: IHotels): void {
    this.selectedHotel = hotel;
  }

  public onAddFavoriteHotel (favoriteHotel: IHotels): void {
    const searchHotel: IHotels | null = this.favoriteHotels.find(
      (element: IHotels) => element.id === favoriteHotel.id
    );
    if (!searchHotel) {
      this.favoriteHotels.push(favoriteHotel);
      return;
    }
}

  public onSelectHotelStars (star: number): void {
    if (star > 0) {
      this.currentStars = star;
      this.displayedHotels = this.hotels.filter( ( hotel: IHotels ) => hotel.stars === star);
    } else {
      this.displayedHotels = this.hotels;
    }
  }
}
