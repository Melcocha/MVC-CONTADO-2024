import { Component, OnInit } from '@angular/core';
import { Dte } from 'src/app/types';
import { DteService } from '../../../../services/dte.service';

export interface PeriodicElement {
  id:number;
  orden: number;
  emision: string;
  comprador: number;
  vendedor:number;
  Descripcion: string;
  Pag?: string;
}

var ELEMENT_DATA: Dte[] = [
  //{id:1,orden:1,emision:'2023/10/13',comprador:1,vendedor:1,Descripcion:'si'},
  //{id:2,orden:3,emision:'2024/11/11',comprador:1,vendedor:3,Descripcion:'descripcion de prueba'},
    // {id:1,orden:1,'Lugar y fecha de emisión':'2023/10/13','ID del comprador':1,'ID del vendedor':1,'Descripción':'si'},
    // {id:1,orden:1,'Lugar y fecha de emisión':'2023/10/13','ID del comprador':1,'ID del vendedor':1,'Descripción':'si'},
];

@Component({
  selector: 'app-consumidorfinal',
  templateUrl: './consumidorfinal.component.html',
  styleUrls: ['./consumidorfinal.component.css'],
  providers: [DteService]
})
export class ConsumidorfinalComponent implements OnInit {
  public verMenu:boolean = false;

  constructor(private dteService: DteService) { }

  ngOnInit(): void {
    ELEMENT_DATA = this.dteService.getDtesByTipo('FCF');
  }
  displayedColumns: string[] = ['id', 'orden', 'emision', 'comprador', 'vendedor', 'Descripcion', 'Pag'];

  dataSource = ELEMENT_DATA;
}
