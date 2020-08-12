import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  news: any
  rooms: any;
  constructor(private http: HttpService) { }

  async ngOnInit(): Promise<void> {

    this.news = await this.http.getNews().toPromise();
    this.news = this.news.items;
    this.rooms = [await this.http.getRoom(2).toPromise(), await this.http.getRoom(3).toPromise(), await this.http.getRoom(4).toPromise()];
    this.rooms = [this.rooms[0].item, this.rooms[1].item, this.rooms[2].item];
    console.log(this.rooms);


  }
}
