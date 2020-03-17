import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jp-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  // TODO add down arrow shape at welcome div
  // TODO Design skill jauge section
  // TODO add 3 badge above skill jauge : Programmation, Créatif, loisir (badminton, foot, photo, montages Vidéo)
  // TODO BONUS make scroll sticky header for this page
  // TODO BONUS multiColor for skillJauge
  skills = [{ skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" },
  { skillName: "CSS", skillPercentValue: "20" }, { skillName: "PHP", skillPercentValue: "30" }];

  ngOnInit() {
  }

  getSkillPercentageValue(skill) {
    return skill.skillPercentValue;
  }

}
