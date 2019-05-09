import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  public items: any = [
    { title: 'title 1', description: 'description 1' },
    { title: 'title 2', description: 'description 2' },
    { title: 'title 3', description: 'description 3' }
  ];
  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  getData() {
    return this.items ;
  }
}
