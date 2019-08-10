import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { DatabaseService } from '../../servicios/database.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productos : ProductModel[]

  constructor(private database : DatabaseService) {
    window.scroll({
      top: 2500,
      left: 0,
      behavior: 'smooth'
    })
  }

  ngOnInit() {
    this.ListaProductos()
  }

  ListaProductos() {
    if(!this.database.productos)
    {
      this.database.getProducts().subscribe(() => this.productos = this.database.productos)
    }
    else
    {
      this.productos = this.database.productos
    }
  }

}
