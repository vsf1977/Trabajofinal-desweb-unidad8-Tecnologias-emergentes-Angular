import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

  constructor(private http : Http) { }

  getdata(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/.json')
      .map((response:Response) => response.json())
  }

}
