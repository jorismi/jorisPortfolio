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
  styleUrls: ['./welcome.component.scss'],
  host: {
    '(document:click)': 'clickout($event)',
  },
})

export class WelcomeComponent implements OnInit {
  // TODO Project section: make slideshow img
  // TODO Project section: make photo section (cutout text)
  // TODO BONUS Make Contact section
  // TODO BONUS remake skill grid to accept various number of row for each column
  // TODO BONUS add down arrow shape at welcome div
  // TODO BONUS Flip badges on hover to make text appear: Programmation, Créatif, loisir (badminton, foot, photo, montages Vidéo)
  // TODO BONUS make scroll sticky header for this page
  // TODO BONUS multiColor for skillJauge
  // TODO BONUS make projectModal images look like  phone for mobile application and look like browser for webapp

  skills = [{ skillName: "CSS/HTML", skillPercentValue: "70" }, { skillName: "Premiere Pro", skillPercentValue: "80" }, { skillName: "Badminton", skillPercentValue: "80" },
  { skillName: "Javascript", skillPercentValue: "75" }, { skillName: "After Effects", skillPercentValue: "50" }, { skillName: "Football", skillPercentValue: "65" },
  { skillName: "Angular", skillPercentValue: "65" }, { skillName: "Lightroom", skillPercentValue: "90" }, { skillName: "Photographie", skillPercentValue: "70" },
  { skillName: "Java/C++", skillPercentValue: "80" }, { skillName: "Photoshop", skillPercentValue: "40" }, { skillName: "Montage", skillPercentValue: "85" }];

  skillVisible: boolean = false;
  skillNamePlusSkillPercentValueWidth = 30;
  currentModal: string;
  slideIndex: number = 1;

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  @debounce()
  scroll(event) {
    document.getElementById("allHomeSkillContainer").getBoundingClientRect().bottom - document.getElementById("homePageSection").offsetHeight
    if (document.getElementById("homePageSection").getBoundingClientRect().bottom - window.innerHeight < 0) {
      this.skillVisible = true;
      let skillsJauge = document.getElementsByClassName("skill");
      for (let i = 0; i < skillsJauge.length; i++) {
        let currentSkillJauge = skillsJauge[i] as HTMLElement;
        currentSkillJauge.style.width = this.getPercentageOfNumber(parseInt(this.skills[i].skillPercentValue), 100 - this.skillNamePlusSkillPercentValueWidth) + "%";
      }
    }
  }

  getPercentageOfNumber(num: number, percent: number) {
    return (num / 100) * percent;
  }

  getSkillPercentageValue(skill) {
    return skill.skillPercentValue;
  }

  openProjectModal(idProjectModal: string) {
    this.showSlides(this.slideIndex);
    this.currentModal = idProjectModal;
    let modal = document.getElementById(this.currentModal);
    modal.style.display = "block";
    // to prevent scroll of background
    document.body.style.overflow = "hidden";
  }

  /* Close projectModal if click outside of the modal */
  clickout(event: MouseEvent) {
    if (document.getElementById(this.currentModal) == event.target) {
      this.closeProjectModal();
    }
  }

  closeProjectModal() {
    let modal = document.getElementById(this.currentModal);
    modal.style.display = "none";
    // to re-enable scroll of background
    document.body.style.overflow = "auto";
    this.currentModal = "";
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      let currentSlide = slides[i] as HTMLElement;
      currentSlide.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let currentSlide = slides[this.slideIndex - 1] as HTMLElement;
    currentSlide.style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}
