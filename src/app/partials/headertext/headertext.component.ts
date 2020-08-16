import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headertext',
  templateUrl: './headertext.component.html',
  styleUrls: ['./headertext.component.scss']
})
export class HeadertextComponent implements OnInit {
  @Input() Text;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Text);

  }

}
