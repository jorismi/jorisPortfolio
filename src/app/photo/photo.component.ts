import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  //TODO Activer le scrolling sur la section photo
  //TODO Harmoniser les tailles des photos affichées et le positionnement des flèches dans le slider Photo
  //TODO Mettre des icones de croix et de flèche et améliorer le design du texte dans le slide photo
  //TODO Faire apparaitre et disparaitre la fenetre modal avec un ngIf
  //TODO BONUS faire un wiggle pour les flèches quand on est tout à gauche ou a droite des slides Photos
  //TODO BONUS Essayer d'autre effets lors du survol des photos (desaturation)

  currentSlideName: String;
  currentSlideCaption: String;
  currentSlideIndex: number = 0;
  showPhotoModal: boolean = false;
  photos = [
    { name: 'Laponie-0057.jpg', alt: "firePlace" },
    { name: 'Laponie-0094.jpg', alt: "SnowFace" },
    { name: 'Laponie-0173.jpg', alt: "Aurora" },
    { name: 'Laponie-0175.jpg', alt: "nightSapin" },
    { name: 'Laponie-0199.jpg', alt: "snowRiver" },
    { name: 'Laponie-0217.jpg', alt: "husky" },
    { name: 'Laponie-0247.jpg', alt: "reindeer" },
    { name: 'Laponie-0057.jpg', alt: "firePlace" },
    { name: 'Laponie-0094.jpg', alt: "SnowFace" },
    { name: 'Laponie-0173.jpg', alt: "Aurora" },
    { name: 'Laponie-0175.jpg', alt: "nightSapin" },
    { name: 'Laponie-0199.jpg', alt: "snowRiver" },
    { name: 'Laponie-0217.jpg', alt: "husky" },
    { name: 'Laponie-0057.jpg', alt: "firePlace" },
    { name: 'Laponie-0094.jpg', alt: "SnowFace" },
    { name: 'Laponie-0173.jpg', alt: "Aurora" },
    { name: 'Laponie-0175.jpg', alt: "nightSapin" },
    { name: 'Laponie-0199.jpg', alt: "snowRiver" },
    { name: 'Laponie-0217.jpg', alt: "husky" }
  ];

  constructor() { }

  ngOnInit() { }

  // When a photo is hovered, blur all others by adding class "bluredPhoto"
  photoHovered(event: MouseEvent) {
    let photoHovered = event.currentTarget as HTMLImageElement;
    let photos = document.getElementsByClassName("photo") as HTMLCollection;
    for (var i = 0; i < photos.length; i++) {
      let currentPhoto = photos[i] as HTMLImageElement;
      if (currentPhoto.id != photoHovered.id) currentPhoto.classList.add("bluredPhoto");
    }
  }

  // When mouse left hovered photo, remove class "bluredPhoto" for all photos
  photoLeft() {
    let photos = document.getElementsByClassName("photo") as HTMLCollection;
    for (var i = 0; i < photos.length; i++) {
      let currentPhoto = photos[i] as HTMLImageElement;
      currentPhoto.classList.remove("bluredPhoto");
    }
  }

  openPhotoModal(index: number) {
    //this.showPhotoModal=true;
    this.currentSlideIndex = index;
    document.getElementById("myModal").style.display = "block";
    this.showSlide(this.photos[this.currentSlideIndex].name, this.photos[this.currentSlideIndex].alt);
  }

  // Close the Modal
  closePhotoModal() {
    //this.showPhotoModal=false;
    document.getElementById("myModal").style.display = "none";
  }

  // Next/previous controls
  changeSlide(operator) {

    if (this.currentSlideIndex + operator >= 0 && this.currentSlideIndex + operator < this.photos.length) {
      this.currentSlideIndex += operator;
      this.showSlide(this.photos[this.currentSlideIndex].name, this.photos[this.currentSlideIndex].alt);
    }
  }

  showSlide(slideUrl: String, slideAlt: String) {
    this.currentSlideName = slideUrl;
    this.currentSlideCaption = slideAlt;
  }
} 
