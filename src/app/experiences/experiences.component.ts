import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Experience } from './experiences.class';

@Component({
  selector: 'jp-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  // TODO Make download button work
  // TODO BONUS find bette icon for paul sabatier and university of florida
  // TODO BONUS add newLine inside experience paragraph
  // TODO BONUS Add circle or other to vertical line (=> https://www.w3schools.com/howto/howto_css_timeline.asp)
  // TODO BONUS Make expereienceKeyword clickable to filter
  // List of available filter
  buttonFilters: string[] = ["Webmethods", "REST/SOAP", "Oracle", "Architecture", "Apache", "DevOps", "Administration système Linux", "Intégration continue", "Ansible", "Gatling", "ELK",
    "GWT", "JEE", "Talend", "QlikView",
    "Java", "C", "C++", "Assembleur", ".NET", "HTML", "PHP", "CSS", "Javascript", "Android", "Anglais"];
  // List of my experiences
  // Date is in american format MM/DD/YYYY
  experiences = [
    new Experience("09/14/2015", "07/01/2020", "Ingénieur développeur logiciel", "Capgemini", "Toulouse, France", "Au sein de Capgemini, j'ai travaillé pour le leader de l'energie en France, EDF." +
      "Mon projet est la PSC pour ????????? qui est une plateforme permettant la communication entre les autres applications de l'ecosystème EDF. La PSC est basée sur des WebServices en Webmethods utilisant les protocoles SOAP et REST. \n" +
      "Pendant la 1ère année, j'étais sur la TMA (Tierce Maintenance Applicative) qui consistait au dévelopemment de nouveaux services et à la correction de bugs pour les anciens." +
      "J'ai ensuite été nommé responsable du pôle performance qui est composé de 3 personnes. J'ai alors pu appréhender l'architecture de l'application (Apache, JVM Linux, JMS, Base de données Oracle...). J'ai aussi pu m'initier à à la gestion de projet. J'étais en effet en autonomie sur les chantiers de performances à réaliser, ces derniers étant de mini-projets à part entière"
      , ["Webmethods", "REST/SOAP", "Oracle", "Architecture", "Apache", "DevOps", "Administration système Linux", "Intégration continue", "Ansible", "Gatling", "ELK"]),
    new Experience("09/01/2014", "08/31/2015", "Analyste programmeur (Alternance fin de Maitrise)", "Berger-Levrault", "Toulouse, France", "Pour cet éditeur de logiciel, j'ai été placé sur le projet du nom de Socle qui vait pour but de distribuer les productions des autres équipes sur l'ensemble du parc informatique." +
      "Je participais au support et à la maintenance du Socle. J'ai aussi crée en autonomie un outil d'informatique décisionnel à l'aide de Talend et de QlikView. Cet outil présentait des vues d'ensemble du parc informatiques.", ["GWT", "JEE", "Talend", "QlikView"]),
    new Experience("09/05/2010", "08/31/2015", "Formation pour un diplôme de Maitrîse en développement logiciel", "paulSabatier", "Toulouse, France", "Cette formation de 5 ans m'a permise de maitriser l'algorithmie, le développement logiciel et la gestion de projet. J'ai aussi abordé le développement web et mobile",
      ["Java", "C", "C++", "Assembleur", ".NET", "HTML", "PHP", "CSS", "Javascript", "Android"]),
    new Experience("07/01/2013", "08/31/2013", "Bénévolat comme assistant de laboratoire et développeur Web", "universityFlorida", "Winter Haven, USA, Floride",
      "J'étais chargé de remplir diverses missions propres au laboratoire de recherche (Récolte de données dans les champs, traitement d'ADN, entretien des serres)." +
      "En parallèle, j’ai créé le site web d'une des chefs du laboratoire. " +
      "Ces deux mois ont été très enrichissants car j'ai pu améliorer mon anglais, m'immerger dans une nouvelle culture et approfondir mes connaissances de la programmation web.",
      ["Anglais", "HTML", "PHP", "CSS", "Javascript"]),
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
