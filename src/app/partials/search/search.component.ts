import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  show: boolean = true;
  constructor(public fb: FormBuilder, private router: Router) { }
  search = this.fb.group({
    destination: [null, Validators.required],
    people: [null, [Validators.required]],
  });
  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(this.router.url.split('/')[1]);

        switch (this.router.url.split('/')[1]) {
          case 'search':
            this.show = false;
            break;
          case 'hotels':
            this.show = false;
            break;
          default:
            this.show = true;

            break;
        }

      }
    });

  }
  searchForm() {
    if (this.search.get('destination').value === null && this.search.get('people').value === null) {
      location.href = `search`

    } else {
      location.href = `search/${this.search.get('destination').value}/${this.search.get('people').value}`

    }
  }
}
