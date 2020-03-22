import { Component, OnInit, HostListener } from '@angular/core';

// Debounce scroll funcion
export function debounce(delay: number = 100): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const timeoutKey = Symbol();
    const original = descriptor.value;
    descriptor.value = function (...args) {
      clearTimeout(this[timeoutKey]);
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };
    return descriptor;
  };
}
@Component({
  selector: 'jp-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  // TODO Make aboutMe section
  // TODO Make project section
  // TODO Make Photography section
  // TODO Make Contact section
  // TODO BONUS remake skill grid to accept various number of row for each column
  // TODO BONUS add down arrow shape at welcome div
  // TODO BONUS Flip badges on hover to make text appear: Programmation, Créatif, loisir (badminton, foot, photo, montages Vidéo)
  // TODO BONUS make scroll sticky header for this page
  // TODO BONUS multiColor for skillJauge
  skills = [{ skillName: "CSS/HTML", skillPercentValue: "70" }, { skillName: "Premiere Pro", skillPercentValue: "80" },{ skillName: "Badminton", skillPercentValue: "80" },
  { skillName: "Javascript", skillPercentValue: "75" }, { skillName: "After Effects", skillPercentValue: "50" },{ skillName: "Football", skillPercentValue: "65" },
  { skillName: "Angular", skillPercentValue: "65" }, { skillName: "Lightroom", skillPercentValue: "90" },{ skillName: "Photographie", skillPercentValue: "70" },
  { skillName: "Java/C++", skillPercentValue: "80" }, { skillName: "Photoshop", skillPercentValue: "40" },{ skillName: "Montage", skillPercentValue: "85" }];

  ngOnInit() { }

  skillVisible: boolean = false;
  skillNamePlusSkillPercentValueWidth=30;

  @HostListener('window:scroll', ['$event'])
  @debounce()
  scroll(event) {
    /*console.log(window.innerHeight);
    console.log(document.getElementById("allSkillContainer").getBoundingClientRect().top);
    console.log(document.getElementById("homePageSection").getBoundingClientRect().bottom);*/
    console.log(document.getElementById("homePageSection").getBoundingClientRect().bottom-window.innerHeight);
    document.getElementById("allHomeSkillContainer").getBoundingClientRect().bottom - document.getElementById("homePageSection").offsetHeight
    if (document.getElementById("homePageSection").getBoundingClientRect().bottom-window.innerHeight < 0) {
      this.skillVisible = true;
      let skillsJauge = document.getElementsByClassName("skill");
      for (let i = 0; i < skillsJauge.length; i++) {
        let currentSkillJauge = skillsJauge[i] as HTMLElement;
        currentSkillJauge.style.width = this.getPercentageOfNumber(parseInt(this.skills[i].skillPercentValue), 100-this.skillNamePlusSkillPercentValueWidth) + "%";
      }
    }
  }

  getPercentageOfNumber(num: number, percent: number){
    return (num/100)*percent;
  }
  
  getSkillPercentageValue(skill) {
    return skill.skillPercentValue;
  }

  // Return boolean when an element is visible on screen
  isVisible(element) {
    let viewPortHeight = $(window).height(); // Viewport Height
    let scrollTop = $(window).scrollTop(); // Scroll Top
    let currElementPosY = $(element).offset().top;
    let elementHeight = $(element).height();

    return (currElementPosY + elementHeight > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
  }

  // Animate chart only when you see it
  animateChartWhenVisible(chart) {
    for (var i = 0, count = chart.length; i < count; i++) {
      if (this.isVisible(chart[i])) {
        $(chart[i]).addClass("mymove-animation");
      }
    }
  }


  /* FUNCTIONS END */

  // On scroll
  /*$(window).scroll( function() {
    animateChartWhenVisible(charts);
  } );*/

  /* On load */
  /*animateChartWhenVisible(charts);*/

}
