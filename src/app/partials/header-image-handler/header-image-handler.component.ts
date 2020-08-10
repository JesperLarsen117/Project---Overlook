import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header-image-handler',
  templateUrl: './header-image-handler.component.html',
  styleUrls: ['./header-image-handler.component.scss']
})
export class HeaderImageHandlerComponent implements OnInit {
  images = [];
  currentIdx = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const path = '../../../assets/images/';
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/forside':
            this.images = [path + 'frankfurt-skyline-germany.jpg',
            path + 'gdansk-center-church-poland.jpg',
            path + 'harbour-gothenburg.jpg'];
            break;
          case '/hotels':
            this.images = [path + 'seljalandvoss-iceland.jpg'];
            break;
          default:
            break;
        }
      }
    });
  }
  next() {
    const width = window.innerWidth;
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.currentIdx = (this.currentIdx + 1) % this.images.length;
    slides.forEach(element => {
      element.style.transform = `translateX(-${width * this.currentIdx}px)`
    });
  }
  prev() {
    const width = window.innerWidth;
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.currentIdx = (this.currentIdx >= 1) ? (this.currentIdx - 1) % - this.images.length : this.images.length - 1;
    slides.forEach(element => {
      element.style.transform = `translateX(-${width * this.currentIdx}px)`
    });
  }
}
