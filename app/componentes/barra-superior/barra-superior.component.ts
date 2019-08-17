import { Component, OnInit } from '@angular/core'
import { DatosService } from '../../servicios/datos.service'
import { Router } from '@angular/router'
import { DatabaseService } from '../../servicios/database.service'
import { Usermodel } from 'app/modelos/modelos.module';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  nombre : string = ''
  usuarios :  Usermodel[]
  total : number

  constructor(private datos: DatosService, private database : DatabaseService,  private router: Router)
  {
    if (this.datos.VerificarSesion() == null)
      {
        this.router.navigate(['/login'])
      }
      else
      {
        this.GetCantidad(this.datos.VerificarSesion())
      }
  }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre')
  }

  CerrarSesion()
  {
    this.datos.CerrarSesion()
    this.router.navigate(['main'])
  }

  GetCantidad(user : string)
  {
    this.database.getCarrito(user).subscribe(() => {
      this.total =  this.database.cantidadtotal
    })
  }
}
