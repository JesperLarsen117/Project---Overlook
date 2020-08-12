import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HotelsComponent implements OnInit {
  activeCountry: string = this.route.snapshot.data.name;
  countrys: any;
  country: any
  citys: any;
  hotels: any
  bread = [];
  id = this.route.snapshot.data.id;
  constructor(private http: HttpService, private router: Router, private location: Location, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    this.countrys = await this.http.getCountrys().toPromise();
    this.countrys = this.countrys.items
    const links = this.router.config;
    for (let i = 1; i < links.length; i++) {
      this.bread.push(links[i].path)
      if (i + 1 < links.length) {
        this.bread.push('>')
      }
    }

    this.country = this.countrys[this.id - 1];
    this.citys = await this.http.getCitys(this.id).toPromise();
    this.citys = this.citys.items
    this.hotels = await this.http.getHotel(this.id).toPromise();
    console.log(this.hotels);

  }
  async filter(city) {
    this.citys = await this.http.getCitys(this.id).toPromise();
    this.citys = this.citys.items
  }

  toLowerCase(string: string) {
    return string.toLowerCase();
  }
}
