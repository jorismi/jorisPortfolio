import { Component, OnInit } from '@angular/core';
import { Experience } from './experiences.class';

@Component({
  selector: 'jp-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  // TODO design experience Card
  // TODO Fix the end of timeline experience which is cut sometimes
  // TODO BONUS Add circle or other to vertical line (=> https://www.w3schools.com/howto/howto_css_timeline.asp)
  // TODO BONUS Make expereienceKeyword clickable to filter
  // List of available filter
  buttonFilters: string[] = ["Angular", "HTML", "NodeJS", "CSS", "JS", "PHP", "JamaisVu","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP","HTML", "NodeJS", "CSS", "JS", "PHP",];
  // List of my experiences
  // Date is in american format MM/DD/YYYY
  experiences = [
    new Experience("02/05/2019", "03/07/2020", "Angular et JS", "Capgemini", "Toulouse", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat iaculis enim eget sollicitudin. Etiam aliquet congue nibh, vitae blandit velit accumsan sit amet. Sed molestie condimentum ligula vel varius. Vivamus nibh elit, tincidunt a semper quis, efficitur nec felis. Vivamus elementum lacinia lorem non vulputate. Nam lectus eros, vulputate ac nisl non, accumsan iaculis purus. Phasellus fermentum velit in dapibus tempus. Mauris tortor odio, lobortis vitae ultricies mollis, tempor quis neque. Donec mollis purus nisl, eu fringilla orci rutrum a.", ["Angular", "JS"]),
    new Experience("05/05/2019", "03/20/2019", "HTML et PHP", "Berger-Levrault", "Paris", "Ut at placerat nisi. Pellentesque egestas augue leo, non egestas massa finibus eu. Sed maximus mi eget nulla efficitur semper. In sagittis interdum purus sit amet sollicitudin. Aenean nibh tortor, bibendum quis feugiat eget, ornare quis nunc. Praesent placerat dui sagittis interdum efficitur. Vivamus vehicula tortor in scelerisque maximus. Mauris consequat ante at diam viverra, ac venenatis ligula tempus. Maecenas mattis dolor molestie, gravida dolor semper, pellentesque massa.", ["HTML", "PHP"]),
    new Experience("05/28/2018", "01/15/2019", "Angular", "Adonia", "Bordeaux", "Super expérience en Angular", ["Angular"]),
    new Experience("02/05/2019", "03/07/2020", "Angular et JS", "BYG", "Toulouse", "Super expérience en Angular et JS", ["Angular", "JS"]),
    new Experience("05/05/2019", "03/20/2019", "HTML et PHP", "Capgemini", "Paris", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris semper non neque scelerisque vulputate. Morbi porttitor feugiat erat, nec bibendum nisl scelerisque eget. In quis dolor vitae nunc rutrum dapibus. Nam a risus vel libero placerat euismod et sed ipsum. Vestibulum et leo malesuada, varius enim ut, pharetra risus. Nullam semper rhoncus tortor, a interdum libero mollis eu. Donec nec venenatis enim, ut condimentum neque. Nam ac sem volutpat, eleifend mi nec, mattis lectus. Duis maximus fermentum odio eget tincidunt", ["HTML", "PHP"]),
    new Experience("05/28/2018", "01/15/2019", "Angular", "Capgemini", "Bordeaux", "Super expérience en Angular", ["Angular"]),
  ];
  // List of keyword which filter my experiences, if empty, display all
  experienceFilterArgs: string[] = [];

  constructor() { }

  ngOnInit() { }

  filter(event: MouseEvent) {
    let buttonClicked = event.currentTarget as HTMLButtonElement;
    buttonClicked.classList.toggle("activated");
    // Get into array text content of all activated button 
    this.experienceFilterArgs = Array.from(document.getElementsByClassName("activated")).map(x => x.textContent);
    // Creating copy of filteredArgs to trigger pure pipe
    this.experienceFilterArgs = this.experienceFilterArgs.slice();
  }

  // Activate en experience keyword if it's into the filterList
  activateKeyword(expKeyword: string) {
    return this.experienceFilterArgs.includes(expKeyword);
  }
}
