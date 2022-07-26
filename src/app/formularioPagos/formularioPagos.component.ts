import { Component, OnInit } from '@angular/core';
import { Egreso } from '../Egreso.module';
import { Ingreso } from '../ingreso.module';
import { PagosService } from '../pagosService.service';

@Component({
  selector: 'app-formularioPagos',
  templateUrl: './formularioPagos.component.html',
  styleUrls: ['./formularioPagos.component.scss']
})
export class FormularioPagosComponent implements OnInit {

  tipo:String = "ing";
  descripcionInput: String =''
  montoInput : number

  constructor(private pagoServicio : PagosService) { }

  ngOnInit() {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
      if(this.tipo == "ing") {
        this.pagoServicio.ingresos.push(new Ingreso(this.montoInput, this.descripcionInput))
      }
      else {
        this.pagoServicio.egresos.push(new Egreso(this.montoInput, this.descripcionInput))
      }
  }

}
