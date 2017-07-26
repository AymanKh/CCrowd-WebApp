import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  @Input() display: string;
  @Input() chartLabel: string;
  @Output() displayChange = new EventEmitter();


    public bubble_ChartData = [
    ['Crowd Level','Day', 'Time', 'Color', 'Size'],
    
    // ['Crowd Level', 7, 11],


    ['Crowd Level', 1, 12, 1, 1],



    // ['Crowd Level', 2, 14],
    // ['Crowd Level', 3, 16],
    // ['Crowd Level', 4, 18],
    // ['Crowd Level', 5, 20],
    // ['Crowd Level', 6, 22],

  ];

  

  public bubble_ChartOptions = {
    height:500,
    width: 500,
    hAxis: {
      title: 'Day', 
      viewWindow: {min: new Date(2017,1,1,11), max:new Date(2017,1,9,11)},
      // format: 'ddd',
      gridlines: {
        count: 8,
        units: {
          days: {format:'dd/MM'}
        }}
    },
    vAxis: {
      title: 'Time',
      viewWindow: {min: new Date(2017,1,1,11), max:new Date(2017,1,1,23)},
      gridlines: {
            count: 12,
            units: {
              hours: {format:'hh:mm a'}
              // minutes: {format: ['HH:mm a Z', ':mm']}
            }
          }
    },
    
    bubble: {
      textStyle: {
        fontSize: 12,
        fontName: 'Times-Roman',
        color: 'green',
        bold: true,
        italic: true
      }
    },

    sizeAxis: {
      minValue: 1,
      maxValue: 10,
      minSize:1,
      maxSize: 15
    },

    colorAxis: {
      colors: ["green","red"]
    }
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  onErrorHandled() {
        this.display = 'none';
        this.displayChange.emit(this.display);
    }

}
