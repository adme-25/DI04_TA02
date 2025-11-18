import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: false
})
export class LineChartComponent  implements OnInit {
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
      datasets: [ {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      } ]
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
      type: 'line' as ChartType, // tipo de la gráfica 
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
