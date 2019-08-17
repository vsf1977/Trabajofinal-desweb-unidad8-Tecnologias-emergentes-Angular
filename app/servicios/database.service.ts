import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usermodel, ProductModel, CarritoModel } from '../modelos/modelos.module';
import 'rxjs/Rx';


@Injectable()
export class DatabaseService {

  public usuarios  : Usermodel[]
  public productos  : ProductModel[]
  public carrito : CarritoModel[]
  private aux : CarritoModel[]
  public cuentatotal : number
  public cantidadtotal : number


  constructor(private http : Http) { }

  getUsers(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/usuarios/.json')
      .map((response:Response) => this.usuarios = response.json())
  }

  getProducts(){
    return this.http.get('https://tienda-en-angular.firebaseio.com/productos/.json')
      .map((response:Response) => this.productos = response.json())
  }

  getCarrito(user : string)
  {
    return this.http.get('https://tienda-en-angular.firebaseio.com/carrito/.json')
      .map((response:Response) =>
      {
        this.aux = response.json()
        let aux1 : any[] = []
        this.cuentatotal = 0
        this.cantidadtotal = 0
        for (let key in this.aux)
        {
          if (user == this.aux[key].usuario)
          {
            this.cuentatotal += this.aux[key].cantidad * this.aux[key].precio
            this.cantidadtotal += this.aux[key].cantidad
            aux1.push(this.aux[key])
          }
        }
        let i = 0
        let x = 0
        while (i < aux1.length-1)
        {
          x = i + 1
          while (x < aux1.length)
          {
              if (aux1[i].producto.toUpperCase() == aux1[x].producto.toUpperCase())
              {
                aux1[i].cantidad = aux1[i].cantidad + aux1[x].cantidad
                aux1.splice(x,1)
              }
              else
              {
                x=x+1
              }
          }
          i=i+1
        }
        this.carrito =  aux1
      }
    )
  }

  savecarrito(carrito : CarritoModel){
    const datos = JSON.stringify(carrito)
    return this.http.post('https://tienda-en-angular.firebaseio.com/carrito/.json',datos)
      .map((response:Response) => this.carrito = response.json())
  }

}
