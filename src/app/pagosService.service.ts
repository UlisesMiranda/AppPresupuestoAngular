import { Injectable } from '@angular/core';
import { Egreso } from './Egreso.module';
import { Ingreso } from './ingreso.module';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  ingresos: Ingreso[] = [new Ingreso(100, 'xd'), new Ingreso(20, "a")]
  egresos: Egreso[] = [new Ingreso(50, 'a')]

  agregarIngreso(cantidad: number, descripcion:String) {
    this.ingresos.push(new Ingreso(cantidad, descripcion))
  }
  agregarEgreso(cantidad: number, descripcion:String) {
    this.egresos.push(new Egreso(cantidad, descripcion))
  }

  eliminarIngreso(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso)
    this.ingresos.splice(indice, 1);
  }

  eliminarEgreso(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso)
    this.egresos.splice(indice, 1);
  }


}

