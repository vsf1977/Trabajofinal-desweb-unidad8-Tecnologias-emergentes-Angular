import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usermodel, ProductModel, CarritoModel } from '../modelos/modelos.module';
import 'rxjs/Rx';


@Injectable()
export class DatabaseService {

  public usuarios  : Usermodel[]
  public productos  : ProductModel[]
  public carrito : CarritoModel[]
  public aux : CarritoModel[]

  constructor(private http : Http) { }

  getUsers(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/usuarios/.json')
      .map((response:Response) => this.usuarios = response.json())
  }

  getProducts(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/productos/.json')
      .map((response:Response) => this.productos = response.json())
  }

  getCarrito(user : string){
    return this.http.get('https://tienda-en-angular.firebaseio.com/carrito/.json')
      .map((response:Response) => {
        this.aux = response.json()
        let aux1 : any[] = []
        for (let key in this.aux)
        {
          if (user == this.aux[key].usuario)
          {
          aux1.push(this.aux[key])
          }
        }
        this.carrito =  aux1
        })
  }

  savecarrito(carrito : CarritoModel){  
    const datos = JSON.stringify(carrito)
    return this.http.post('https://tienda-en-angular.firebaseio.com/carrito/.json',datos)
      .map((response:Response) => this.carrito = response.json())
  }

}
