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
