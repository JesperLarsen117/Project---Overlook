import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  countrys: any;
  country: any
  citys: any;
  hotels: any
  constructor(private http: HttpService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.countrys = await this.http.getCountrys().toPromise();
    this.countrys = this.countrys.items
    console.log(this.countrys);

    this.filter(1)

  }
  async filter(id: number) {
    this.country = this.countrys[id - 1];
    this.citys = await this.http.getCitys(id).toPromise();
    this.citys = this.citys.items
    this.hotels = await this.http.getHotels(id).toPromise();
    this.hotels = this.hotels;
  }
}
