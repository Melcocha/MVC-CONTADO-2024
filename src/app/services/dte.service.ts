import { GraphqlService } from './graphql.service';
import { Injectable, inject, signal } from '@angular/core';
import { enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dte } from '../types';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class DteService{

  private readonly baseUrl: string = enviroment.baseUrl;
  private http = inject( HttpClient);

  //private _currentUser = signal<User|null>(null);
  private dteUrl: string = this.baseUrl + '';
  private _graphqlService: GraphqlService;

  private dtes: Dte[] = [];

  constructor(graphqlService: GraphqlService) {
    this._graphqlService = graphqlService;
  }

  public getDtesByTipo(tipoDoc: string): Dte[]{
    this._graphqlService._apollo.query({
      query: gql`query Query {
        obtenerDocumentoFacturacion {
          id
          noDocumento
          fechaDocumento
          horaDocumento
          idEstadoDocumento
          idCliente
        }
      }`
    }).subscribe((result: any) => {
      this.dtes = result.data as Dte[];
      console.log(this.dtes);
    });
    return this.dtes;
  }
}
