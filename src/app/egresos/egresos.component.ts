import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../Egreso.module';
import { PagosService } from '../pagosService.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[]
  @Input() ingresoTotal : number

  constructor(private pagosService: PagosService) { }

  ngOnInit() {
    this.egresos = this.pagosService.egresos
  }

  eliminarEgreso(egreso: Egreso) {
    this.pagosService.eliminarEgreso(egreso)
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.monto / this.ingresoTotal
  }

}
