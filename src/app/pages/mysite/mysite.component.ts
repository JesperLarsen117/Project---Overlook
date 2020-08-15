import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoginCheckService } from 'src/app/services/login-check.service';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-mysite',
  templateUrl: './mysite.component.html',
  styleUrls: ['./mysite.component.scss']
})
export class MysiteComponent implements OnInit {
  resevations: any;
  name = this.checkLogin.getCookie('name');
  token = this.checkLogin.getCookie("token");
  userid = this.checkLogin.getCookie('user_id');
  constructor(private http: HttpService, private checkLogin: LoginCheckService) { }

  async ngOnInit(): Promise<void> {


    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


    this.resevations = await this.http.getResevation(this.userid, { headers }).toPromise()
    this.resevations = this.resevations.items
    console.log(this.resevations);

  }
  async deleteResevation(id, ev) {
    ev.currentTarget.parentNode.parentNode.remove();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const data = await this.http.deleteResevation(id, headers).toPromise();
    console.log(data);

  }
  logout() {
    this.checkLogin.setCookie('token', '', -7);
    this.checkLogin.setCookie('user_id', '', -7);
    location.href = '/';
  }
}
