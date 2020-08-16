import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  second: Array<Object> = [];
  search: any = [];
  country: any = this.route.snapshot.params.dest;
  people: any = this.route.snapshot.params.id;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  async ngOnInit() {

    switch (this.country) {
      case 'danmark':
        this.getHotel(10);
        this.getHotel(11);
        this.getHotel(12);
        this.getHotel(13);
        this.getHotel(14);
        this.getHotel(15);
        this.getHotel(16);

        break;
      case 'sverige':
        this.getHotel(1);
        this.getHotel(3);
        this.getHotel(4);
        this.getHotel(5);
        this.getHotel(6);
        break;
      case 'finland':
        this.getHotel(7);
        this.getHotel(8);
        this.getHotel(9);
        break;
      case 'norge':
        this.getHotel(17);
        this.getHotel(18);
        this.getHotel(19);
        this.getHotel(20);
        this.getHotel(21);
        this.getHotel(22);
        break;
      case 'tyskland':
        this.getHotel(23);
        this.getHotel(24);
        this.getHotel(25);
        this.getHotel(26);
        break;
      case 'polen':
        this.getHotel(27);
        this.getHotel(28);
        break;
      case 'island':
        this.getHotel(30);
        this.getHotel(31);
        break;
    }
    console.log(this.second);

  }
  async getHotel(id: number) {
    let data: any = await this.http.getHotel(id).toPromise();
    let items = (data.items) ? data.items : data.item;

    this.second.push(...items.rooms.items);
    this.search.push(items);
  }
}
