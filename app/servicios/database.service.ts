import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usermodel, ProductModel } from '../modelos/modelos.module';
import 'rxjs/Rx';


@Injectable()
export class DatabaseService {


  public usuarios  : Usermodel[]
  public productos  : ProductModel[]

  constructor(private http : Http) { }

  getUsers(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/usuarios/.json')
      .map((response:Response) => this.usuarios = response.json())
  }

  getProducts(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/productos/.json')
      .map((response:Response) => this.productos = response.json())
  }

}
