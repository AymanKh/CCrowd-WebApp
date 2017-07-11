import { Component, OnInit } from '@angular/core';
import {SemiCircleBarComponent} from '../semi-circle-bar/semi-circle-bar.component';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isClassVisible: false;

  desiredid: string = "id0";
  desiredid2: string = "id1";
  desiredid3: string = "id2";
  desiredid4: string = "id3";
  desiredid5: string = "id4";

  updateBars: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  clicked() {
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
openNav() {
    document.getElementById("MainMenu").style.width = "250px";
    document.getElementById("MainMenu").style.zIndex = "99";
    document.getElementById("page-content-wrapper").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
closeNav() {
    document.getElementById("MainMenu").style.width = "0";
    document.getElementById("page-content-wrapper").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

ManageNav() {
  if (this.isClassVisible) {
    document.getElementById("MainMenu").style.width = "250px";
    document.getElementById("page-content-wrapper").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  else {
    document.getElementById("MainMenu").style.width = "0";
    document.getElementById("page-content-wrapper").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";

  }
}

updateUpdate() {
  this.updateBars = Math.random();
}

  public isCollapsed:boolean = false;
 
}
