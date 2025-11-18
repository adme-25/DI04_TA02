import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { Chart, ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: false
})
export class BarChartComponent  implements OnInit {
  @Input() nameTab: string = "";
  public chart!: Chart;

  constructor(private elem: ElementRef, private rend: Renderer2) { }
  
  ngOnInit() {
    this.inicializarChart();
  }
  
  private inicializarChart(){
    // datos
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        tension: 0.1
      }
    ]
    };
    
    //Crear el elemento div    
    const div = this.rend.createElement('div');
    // Establecer las propiedad del div que se necesiten
    this.rend.setStyle(div, 'width', '100%');
    this.rend.setStyle(div, 'height', '100%');
    this.rend.setStyle(div, 'margin', 'auto');
    this.rend.setStyle(div, 'text-align', 'center');

    // Añadir el atributo id al div
    this.rend.setAttribute(div, 'id', 'container'+this.nameTab+'BarChart');

    // Crear el elemento canvas
    const canvas = this.rend.createElement('canvas');
    //Añadir atributo id al canvas
    this.rend.setAttribute(canvas, 'id', this.nameTab+'BarChart');

    // Agregar el canvas al div
    this.rend.appendChild(div, canvas);
    // Agregar el div al elemento actual del componente
    this.rend.appendChild(this.elem.nativeElement, div);



    // Creamos la gráfica
    this.chart = new Chart(canvas, {
      type: 'bar' as ChartType, // tipo de la gráfica 
      data: data, // datos 
      options: { // opciones de la gráfica
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
              font: {
                size: 16,
                weight: 'bold'
              }
            },
          }
        },
      }
    });
    this.chart.canvas.width = 100;
    this.chart.canvas.height = 100;
  }
}
