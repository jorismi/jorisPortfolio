import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    alert("hello");
  }

}
