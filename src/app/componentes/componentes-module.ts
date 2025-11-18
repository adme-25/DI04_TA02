import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [BarChartComponent, LineChartComponent, PieChartComponent],
  imports: [
    CommonModule
  ],
  exports: [BarChartComponent, LineChartComponent, PieChartComponent]
})
export class ComponentesModule { }
