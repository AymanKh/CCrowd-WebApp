import { Component, Input } from '@angular/core';
import { BarProperties } from './bar.properties';
var ProgressBar = require('progressbar.js');
// import {mappings} from './titles.mapping';


@Component({
    selector: 'semi-circle-bar',
    templateUrl: './semi-circle-bar.component.html',
    styleUrls: ['./semi-circle-bar.component.css']
})

export class SemiCircleBarComponent {

    bar: any;
    barValue: number = 0.5;
    @Input() idscb: string;
    @Input() update: number;
    firstTime: number = 1;
    titles: { id: number, name: string }[];
    title: string;
    imgSrc: string;
    displayBubble: string;
    labelBubble: string;

    constructor() {
        this.displayBubble = "none";
        console.log("SCB Constructor Called!");
        this.titles = [
            { "id": 0, "name": "Weights Room" },
            { "id": 1, "name": "Cardio Room" },
            { "id": 2, "name": "Aerobics Room" },
            { "id": 3, "name": "Track" },
            { "id": 4, "name": "Swimming Pool" }
        ];
    }

    ngOnInit() {
        this.title = this.titles[this.idscb.charAt(2)].name;
        this.imgSrc = "../assets/icons/" + this.idscb.charAt(2) + ".png";
        this.labelBubble = this.title + " Weekly Usage";
    }

    ngAfterViewInit() {
        
        console.log("SCB ngAfterViewInit!");
        console.log(this.idscb);
        console.log(this.update);
        console.log(this.titles[0].name);
        this.displayBubble = "none";


        this.bar = new ProgressBar.SemiCircle('#' + this.idscb, new BarProperties().properties);
        this.bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        this.bar.text.style.fontSize = '5rem';
        this.bar.animate((Math.floor(Math.random() * 6) + 1  )/10);  // Number from 0.0 to 1.0

    }
    ngOnChanges() {
        if (!this.firstTime) {
            this.bar.animate(Math.random());
        }
        else {
            this.firstTime = 0;
        }
    }

    updateBar() {
        this.bar.animate((Math.floor(Math.random() * 6) + 1  )/10);
    }

    print() {
        console.log(this.update);
    }

    barClicked() {
        this.displayBubble = "block";
        console.log("bar clciked!");
        console.log(this.displayBubble);
    }

}