import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
//TODO Implement display/hide card
  buttonFilters = [
    { content: 'Angular' }, { content: 'HTML' }, { content: 'NodeJS' }, { content: 'CSS' }, { content: 'JS' }, { content: 'PHP' }, { content: 'JamaisVu' }
  ];

  getLargeurValeur() {
    return this.largeurValeur;
  }

  largeurValeur: string = "20";

  constructor() { }

  ngOnInit() {
  }

  activateFilter(event: MouseEvent) {
    let buttonClicked = event.currentTarget as HTMLButtonElement;
    let toActivate = false;
    buttonClicked.classList.contains("activated")
      ? (toActivate = false)
      : (toActivate = true);
    toActivate
      ? buttonClicked.classList.add("activated")
      : buttonClicked.classList.remove("activated");

    var filterButtons = document.getElementsByClassName("filterBtn");
    for (var i = 0; i < filterButtons.length; i++) {
      if (buttonClicked.innerHTML == filterButtons[i].innerHTML) {
        toActivate
          ? filterButtons[i].classList.add("activated")
          : filterButtons[i].classList.remove("activated");
      }
    }
  }
}
