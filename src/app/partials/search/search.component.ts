import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  search = this.fb.group({
    destination: ["", Validators.required],
    people: ["", [Validators.required]],
  });
  ngOnInit(): void {
  }
  searchForm() {
    location.href = `search/${this.search.get('destination').value}/${this.search.get('people').value}`
  }
}
