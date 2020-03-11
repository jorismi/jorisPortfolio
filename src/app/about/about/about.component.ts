import { Component, OnInit } from '@angular/core';
import { Experience } from './experience.class';

@Component({
  selector: 'jp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // TODO design experience Card
  // TODO Design vertical timeline
  // TODO BONUS Fix activating the filter buttons directly into experience
  // TODO BONUS format date
  // TODO BONUS Find a better way of comparing filterButton, with something else than innerHTML

  // List of available filter
  buttonFilters: String[] = ["Angular", "HTML", "NodeJS", "CSS", "JS", "PHP", "JamaisVu"];
  // List of my experiences
  experiences = [
    new Experience("05/02/2019", "Angular et JS", "Toulouse", "Super expérience en Angular et JS", ["Angular", "JS"]),
    new Experience("16/03/2019", "HTML et PHP", "Paris", "Super expérience en HTML et PHP", ["HTML", "PHP"]),
    new Experience("28/05/2020", "Angular", "Bordeaux", "Super expérience en Angular", ["Angular"]),
  ];
  // List of keyword which filter my experiences, if empty, display all
  aboutExperienceFilterArgs = [];

  getLargeurValeur() {
    return this.largeurValeur;
  }

  largeurValeur: string = "20";

  constructor() { }

  ngOnInit() {
  }

  filter(btnFilter, event: MouseEvent) {
    // Get into array text content of all activated button 
    this.aboutExperienceFilterArgs = Array.from(document.getElementsByClassName("activated")).map(x => x.textContent);
    //this.aboutExperienceFilterArgs.push(btnFilter);
    
    // Creating copy of filteredArgs to trigger pure pipe
    this.aboutExperienceFilterArgs = this.aboutExperienceFilterArgs.slice();
  }

  // Toggle style 'activated' for all button
  activateBtnFilter(event: MouseEvent) {
    let buttonClicked = event.currentTarget as HTMLButtonElement;
    var filterButtons = document.getElementsByClassName("filterBtn");
    for (var i = 0; i < filterButtons.length; i++) {
      if (buttonClicked.innerHTML.trim() == filterButtons[i].innerHTML.trim()) {
        filterButtons[i].classList.toggle("activated");
      }
    }
  }
}
