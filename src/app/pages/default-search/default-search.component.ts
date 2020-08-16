import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-default-search',
  templateUrl: './default-search.component.html',
  styleUrls: ['./default-search.component.scss']
})
export class DefaultSearchComponent implements OnInit {
  second: Array<Object> = [];
  country: any = this.route.snapshot.params.dest;
  people: any = this.route.snapshot.params.id;

  search = this.fb.group({
    destination: [null, Validators.required],
    people: [null, [Validators.required]],
  });
  constructor(private http: HttpService, private route: ActivatedRoute, public fb: FormBuilder) { }

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
  searchForm() {
    location.href = `search/${this.search.get('destination').value}/${this.search.get('people').value}`
  }
}

