import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.scss']
})
export class CitysComponent implements OnInit {
  id: any = this.route.snapshot.params.id;
  activeCountry: string;
  hotels: any;
  countrys: any;
  city: any;
  citys: any;
  searchValue: any;
  constructor(private route: ActivatedRoute, private http: HttpService, private location: Location, private router: Router) { }

  async ngOnInit() {
    this.hotels = await this.http.gethotels(this.id).toPromise();
    this.hotels = this.hotels.items;

    this.countrys = await this.http.getCountrys().toPromise();
    this.countrys = this.countrys.items
    this.city = await this.http.getCity(this.id).toPromise();
    this.city = this.city.item;
    console.log(this.city);

    this.citys = await this.http.getCitys(this.city.country_id).toPromise();
    this.citys = this.citys.items;
    console.log(this.citys);
    this.activeCountry = this.city.country_name.toLowerCase();
  }

  navToCountry(id: string) {
    window.location.href = 'hotels/' + this.city.country_name.toLowerCase() + '/' + id;
  }
}
