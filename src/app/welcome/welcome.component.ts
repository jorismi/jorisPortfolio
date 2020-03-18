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
  // TODO add down arrow shape at welcome div
  // TODO Finish design skill jauge section
  // TODO Flip badges on hover to make text appear: Programmation, Créatif, loisir (badminton, foot, photo, montages Vidéo)
  // TODO BONUS make scroll sticky header for this page
  // TODO BONUS multiColor for skillJauge
  skills = [{ skillName: "CSS", skillPercentValue: "20" }, { skillName: "CSS", skillPercentValue: "20" },
  { skillName: "PHP", skillPercentValue: "30" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" }];

  ngOnInit() { }

  skillVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  @debounce()
  scroll(event) {
    console.log(document.getElementById("allSkillContainer").getBoundingClientRect().top);
    if (document.getElementById("allSkillContainer").getBoundingClientRect().bottom - document.getElementById("homePageSection").offsetHeight < 0) {
      this.skillVisible = true;
      let skillsJauge = document.getElementsByClassName("skill");
      for (let i = 0; i < skillsJauge.length; i++) {
        let currentSkillJauge = skillsJauge[i] as HTMLElement;
        currentSkillJauge.style.width = this.skills[i].skillPercentValue + "%";
      }
    }
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
