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
  id = this.route.snapshot.params.hotelId
  rooms: any;
  roomPicture = [];
  city: any;
  activeCountry: string;

  countrys: any;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.hotel = await this.http.getHotel(this.id).toPromise();
    this.hotel = this.hotel.item;
    console.log(this.hotel);

    this.countrys = await this.http.getCountrys().toPromise();
    this.countrys = this.countrys.items

    this.rooms = this.hotel.rooms.items
    console.log(this.rooms);

    this.city = await this.http.getCity(this.id).toPromise();
    this.city = this.city.item;

    this.activeCountry = this.city.country_name.toLowerCase();


    this.rooms.forEach(item => {
      this.roomPicture.push(item.images[0].image);
    });
    console.log(this.roomPicture);
  }

  expand(ev) {
    console.dir(ev.currentTarget.parentNode.children);
    const parrent = ev.currentTarget.parentNode as HTMLElement;
    parrent.classList.toggle('open')
  }
}
