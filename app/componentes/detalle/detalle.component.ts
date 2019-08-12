import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { ProductModel } from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { MainComponent } from '../main/main.component'
import { DatabaseService } from '../../servicios/database.service'
import { Http, Response } from '@angular/http'
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
  parametro = 'nombre'
  productos : ProductModel[]
  constructor(private activatedRoute: ActivatedRoute, private database : DatabaseService) 
  {
     this.producto = this.activatedRoute.snapshot.params[this.parametro];
  }

  ngOnInit() {
    this.getinfo()
    
  }

  
  getinfo() {
    if(!this.database.productos)
    {     
      this.database.getProducts().subscribe(() => this.productos = this.database.productos)
    }
    else
    {      
      this.productos = this.database.productos
    }
    console.log(this.productos)
    for (let i=0;i<this.database.productos.length;i++)
    {
      if (this.database.productos[i].nombre == this.producto)
      {
        this.precio = this.database.productos[i].precio
        this.unidades =  this.database.productos[i].unidades
      }
    }
  }
}
