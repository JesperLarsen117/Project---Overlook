import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/app/services/login-check.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  checkLogin: boolean;

  constructor(public CheckLogin: LoginCheckService) { }

  ngOnInit(): void {
    if (this.CheckLogin.getCookie('user_id') != null) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
    console.log(this.checkLogin);

  }
  checkLoggedIn(check) {
    if (check) {
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  }

  openMenu() {
    const mobileContainer = document.getElementsByClassName('mobile')[0] as HTMLElement;
    mobileContainer.classList.toggle('open');
  }
}
