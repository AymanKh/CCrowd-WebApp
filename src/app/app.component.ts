import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bar: any;
  barValue: number = 0.5;
  desiredid: string = "thisisid";
  desiredid2: string = "thisisid2";

    public bubble_ChartData = [
    ['Crowd Level','Day', 'Time'],
    ['Crowd Level', 0, 11],
    ['Crowd Level', 1, 12],
    ['Crowd Level', 1, 13],
    ['Crowd Level', 1, 14],
    ['Crowd Level', 1, 15],
    ['Crowd Level', 1, 16],
    ['Crowd Level', 1, 17],
  ];

  public bubble_ChartOptions = {
    height: 1900,
    hAxis: {title: 'Day', viewWindow: {max:0, min:8}},
    vAxis: {title: 'Time', viewWindow: {max:11, min:23} },
    chartArea:{height:'100%'},
    bubble: {
      textStyle: {
        fontSize: 12,
        fontName: 'Times-Roman',
        color: 'green',
        bold: true,
        italic: true
      }
    }
  };

}
