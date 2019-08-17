import { Component, OnInit } from '@angular/core';
import { ProductModel, CarritoModel, Usermodel} from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { DatabaseService } from '../../servicios/database.service';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productos : ProductModel[]
  carrito :  CarritoModel[]
  patron : string

  constructor(private database : DatabaseService,private datos: DatosService,  private router: Router) {
    if (this.datos.VerificarSesion() == null)
    {
      this.router.navigate(['/login'])
    }
    else
    {
      this.ListaProductos()      
    }
  }

  ngOnInit() {
    this.patron = ''
    this.ListaProductos()  
  }

  Patron(event: any) { 
    this.patron = event.target.value.trim().toUpperCase()    
    this.ListaProductos()  
  }

  ListaProductos() {
    if(!this.database.productos)
    {
      this.database.getProducts().subscribe(() =>{ 
        this.Filtrar()
      })
    }
    else
    {
      this.Filtrar()
    }
  }


  Filtrar()
  {
  if (this.patron == '')
    {        
      this.productos = this.database.productos
    }
    else
    {   
      let producto : string
      let aux : any[] = []
      for(let i=0;i<this.database.productos.length;i++)
      {
        producto = this.database.productos[i].nombre.toUpperCase()
        if (producto.indexOf(this.patron) > -1)
          {
            aux.push(this.database.productos[i])
          }
          this.productos =  aux
      }
    }
  }
}