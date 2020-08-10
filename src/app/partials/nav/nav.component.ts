import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openMenu() {
    const mobileContainer = document.getElementsByClassName('mobile')[0] as HTMLElement;
    mobileContainer.classList.toggle('open');
  }
}
