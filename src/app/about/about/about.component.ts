import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  buttonFilters = [
    {
      content: 'Angular'
    },
    {
      content: 'HTML'
    },
    {
      content: 'NodeJS'
    },
    {
      content: 'CSS'
    },
    {
      content: 'JS'
    },
    {
      content: 'PHP'
    },
    {
      content: 'JamaisVu'
    }
  ];

  getLargeurValeur() {
    return this.largeurValeur;
  }

  largeurValeur: string = "20";

  constructor() { }

  ngOnInit() {
    var clickFilterButton = function () {
      let toActivate = false;
      this.classList.contains("activated")
        ? (this.toActivate = false)
        : (this.toActivate = true);
      this.toActivate
        ? this.classList.add("activated")
        : this.classList.remove("activated");

      var filterButtons = document.getElementsByClassName("filterBtn");
      for (var i = 0; i < filterButtons.length; i++) {
        if (this.innerHTML == filterButtons[i].innerHTML) {
          this.toActivate
            ? filterButtons[i].classList.add("activated")
            : filterButtons[i].classList.remove("activated");
        }
      }

      function saverange(newValue) {
        this.range = newValue;
        this.Platform.ready().then(() => {
          this.rootRef.child("users").child(this.UserID).child('range').set(this.range)
        })
      }
    };

    function valueChanged(Event) {
      var slider = document.getElementById("largeur");
      document.getElementById("sliderValue").innerHTML = slider.nodeValue;
    }
    /*var filterButtons = document.getElementsByClassName("filterBtn");
    for (var i = 0; i < filterButtons.length; i++) {
      console.log(filterButtons[i].innerHTML);
      filterButtons[i].onclick = clickFilterButton;
    }

    var slider = document.getElementById("largeur");
    document.getElementById("sliderValue").innerHTML = slider.value;
    let boxCss = document.querySelector(".box");
    boxCss.style.width = slider.value + "%";

    function showVal() {
      var slider = document.getElementById("largeur");
      document.getElementById("sliderValue").innerHTML = slider.value;
      let boxCss = document.querySelector(".box");
      boxCss.style.width = slider.value + "%";
    }*/

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
