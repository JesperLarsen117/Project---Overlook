import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotel: any;
  id = this.route.snapshot.params.id
  rooms: any;
  room: any = [];
  roomPicture = [];
  city: any;
  activeCountry: string;
  countryId: any = this.route.snapshot.routeConfig.path.split('/')[0];
  cityId: any = this.route.snapshot.params.id
  hotelId: any = this.route.snapshot.params.hotelId
  countrys: any;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    console.log('-----------');
    console.log(this.route.snapshot.params);
    console.log('-----------');

    this.hotel = await this.http.getHotel(this.id).toPromise();
    this.hotel = this.hotel.item;

    this.countrys = await this.http.getCountrys().toPromise();
    this.countrys = this.countrys.items

    this.rooms = this.hotel.rooms.items
    console.log(this.route.snapshot.routeConfig.path.split('/')[0]);

    this.city = await this.http.getCity(this.id).toPromise();

    this.city = this.city.item;

    this.activeCountry = this.route.snapshot.routeConfig.path.split('/')[0]

    this.rooms.forEach(item => {
      this.roomPicture.push(item.images[0].image);
      this.roomPicture.push(item.images ? item.images[0].image : item.image);
    });
    console.log(this.roomPicture);



    let room1: any = await this.http.getRoom(1).toPromise()
    room1 = room1.item
    let room2: any = await this.http.getRoom(2).toPromise()
    room2 = room2.item
    let room3: any = await this.http.getRoom(3).toPromise()
    room3 = room3.item
    let room4: any = await this.http.getRoom(4).toPromise()
    room4 = room4.item
    let room5: any = await this.http.getRoom(5).toPromise()
    room5 = room5.item
    let room6: any = await this.http.getRoom(6).toPromise()
    room6 = room6.item
    let room7: any = await this.http.getRoom(7).toPromise()
    room7 = room7.item

    this.room.push(room1, room2, room3, room4, room5, room6, room7);
    console.log(this.room);
  }

  expand(ev) {
    console.dir(ev.currentTarget.parentNode.children);
    const parrent = ev.currentTarget.parentNode as HTMLElement;
    // parrent.classList.toggle('open')
    if (parrent.className === 'default') {
      parrent.className = 'open'
    } else if (parrent.className === 'open') {
      parrent.className = 'default'

    }
  }

  book(countryId, hotelId, cityId, roomId, flex) {
    location.href = `/resevation/${countryId}/${hotelId}/${cityId}/${roomId}/${flex}`;
  }

  getCity(hotelId) {
    switch (hotelId) {
      case '1':
      case '3':
        return 1;
      case '4':
      case '5':
        return 2;
      case '6':
        return 4;
      case '7':
      case '8':
        return 5;
      case '9':
        return 7;
      case '10':
      case '11':
        return 8;
      case '12':
      case '13':
        return 11;
      case '14':
        return 13;
      case '15':
      case '16':
        return 14;
      case '17':
      case '18':
        return 15;
      case '19':
      case '20':
        return 16;
      case '21':
      case '22':
        return 18;
      case '23':
      case '24':
        return 19;
      case '25':
        return 20;
      case '26':
        return 21;
      case '27':
        return 22;
      case '28':
        return 23;
      case '30':
        return 24;
      case '31':
        return 29;
    }
  }
  getCityName(hotelId) {

    switch (hotelId) {
      case '1':
      case '3':
        return 'göteborg';
      case '4':
      case '5':
        return 'stockholm';
      case '6':
        return 'jönköping';
      case '7':
      case '8':
        return 'helsinki';
      case '9':
        return 'rauma';
      case '10':
      case '11':
        return 'københavn';
      case '12':
      case '13':
        return 'aalborg';
      case '14':
        return 'silkeborg';
      case '15':
      case '16':
        return 'aarhus';
      case '17':
      case '18':
        return 'lillehammer';
      case '19':
      case '20':
        return 'oslo';
      case '21':
      case '22':
        return 'tromsø';
      case '23':
      case '24':
        return 'berlin';
      case '25':
        return 'hamborg';
      case '26':
        return 'frankfurt';
      case '27':
        return 'gdansk';
      case '28':
        return 'wroclaw';
      case '30':
        return 'reykjavik';
      case '31':
        return 'keflavik';
    }
  }
}
