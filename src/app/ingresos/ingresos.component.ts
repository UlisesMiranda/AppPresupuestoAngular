import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.module';
import { PagosService } from '../pagosService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  ingresos: Ingreso[]

  constructor(private pagosService: PagosService) { }

  ngOnInit() {
    this.ingresos = this.pagosService.ingresos
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.pagosService.eliminarIngreso(ingreso)
  }

}
