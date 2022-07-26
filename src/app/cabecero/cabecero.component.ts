import { Component, Input, OnInit } from '@angular/core';
import { PagosService } from '../pagosService.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  @Input() presupuestoTotal: number
  @Input() ingresoTotal: number
  @Input() egresoTotal: number
  @Input() porcentajeTotal: number

  constructor(private pagosServicio: PagosService) { }

  ngOnInit() {

  }

}
