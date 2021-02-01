import { AfterViewInit,Input,OnChanges, QueryList,Component, ViewChild,ElementRef, ViewChildren } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit  {
  @ViewChild('pieChart',{static: false}) pieChart:any;
  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);
  
    const options = {
      title: 'My Daily Activities',
      legend: {position: 'top'}
    };
  
    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
  
    chart.draw(data, options);
  }
  constructor() { 
  }

  ngAfterViewInit(): void {
     google.charts.load('current', { 'packages': ['corechart'] });
     google.charts.setOnLoadCallback(this.drawChart);
   
  }

}
