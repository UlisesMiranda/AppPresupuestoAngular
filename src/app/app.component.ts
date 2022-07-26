import { Component, OnInit } from '@angular/core';
import { Egreso } from './Egreso.module';
import { Ingreso } from './ingreso.module';
import { PagosService } from './pagosService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'presupuesto-app';
  ingresos: Ingreso[] = []
  egresos: Egreso[] = []

  constructor(private pagosServicio: PagosService){}

  ngOnInit(): void {
    this.ingresos = this.pagosServicio.ingresos
    this.egresos = this.pagosServicio.egresos
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0

    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.monto
    })

    return ingresoTotal
  }
  getEgresoTotal() {
    let egresoTotal: number = 0

    this.egresos.forEach(egreso => {
      egresoTotal += egreso.monto
    })

    return egresoTotal
  }

  getPorcentajeTotal (){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal () {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
