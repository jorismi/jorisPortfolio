import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'jp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

// TODO remake all project page!!
export class ProjectComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      (<any>$('#myContainer')).multiscroll({
        verticalCentered: true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        sectionsColor: [],
        navigation: true,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: ['firstSection', 'secondSection', 'thirdSection'],
        loopBottom: true,
        loopTop: true,
        css3: false,
        paddingTop: 0,
        paddingBottom: 0,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        keyboardScrolling: true,
        touchSensitivity: 5,

        //responsive
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveExpand: false,

        // Custom selectors
        sectionSelector: '.ms-section',
        leftSelector: '.ms-left',
        rightSelector: '.ms-right',

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
        afterResize: function () { },
      });
    });
  }

  public ngOnDestroy() {
    // Code de destruction du multiscroll?
    //(<any>$('#myContainer')).multiscroll.destroy();
  }
}
