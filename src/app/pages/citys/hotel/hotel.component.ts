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

  countrys: any;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
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

}
