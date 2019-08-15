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

  constructor(private datos: DatosService, private database : DatabaseService,  private router: Router)
  {
  }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre')
  }

  CerrarSesion()
  {
    this.datos.CerrarSesion()
    this.router.navigate(['main'])
  }
}
