import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: false
})
export class PieChartComponent  implements OnInit {
  @Input() nameTab: string = "";
  public chart !: Chart;

  constructor(private elem:ElementRef, private rend : Renderer2) { }

  ngOnInit() {
    this.inicializarChart();
  }

  private inicializarChart(){
    
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [ {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
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
      type: 'pie' as ChartType, // tipo de la gráfica 
      data: data, // datos 
    });
  }
}
