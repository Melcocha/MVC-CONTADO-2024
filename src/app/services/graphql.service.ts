import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { enviroment } from 'src/enviroments/enviroments';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  private readonly baseUrl: string = enviroment.baseUrl;
  public _apollo: Apollo;

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link:  httpLink.create({
        uri: this.baseUrl,
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
        }),
      }),
      cache: new InMemoryCache()
    });
    this._apollo = apollo;
  }
}
