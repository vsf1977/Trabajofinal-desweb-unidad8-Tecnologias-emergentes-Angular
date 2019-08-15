import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { ProductModel } from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { Router } from '@angular/router';
import { DatabaseService } from '../../servicios/database.service'
import 'rxjs/Rx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  producto = ''
  precio = 0
  unidades = 0
  productos : ProductModel[]
  constructor(private datos: DatosService,private activatedRoute: ActivatedRoute, private database : DatabaseService,  private router: Router)
  {

  }

  ngOnInit() {
    if (this.datos.VerificarSesion() == null)
    {
      this.router.navigate(['/login'])
    }
    else
    {
      this.getinfo()
    }
  }


  getinfo() {
    this.activatedRoute.params.subscribe(params => {
      if(this.database.productos){
        this.productos = this.database.productos
      }else{
        this.database.getProducts().subscribe(() => this.productos = this.database.productos)
            //this.checkCarrito(); //Verificar si existen productos en el carrito
            console.log(this.database.productos)
        }
        if (this.database.productos == null)
        {
          this.router.navigate(['/main'])
        }
        else
        {
          this.producto = params['nombre']
          for (let i=0;i<this.productos.length;i++)
          {
            if (this.productos[i].nombre == params['nombre'])
            {
              this.precio = this.productos[i].precio
              this.unidades =  this.productos[i].unidades
            }
          }
      }
    })
  }
}
