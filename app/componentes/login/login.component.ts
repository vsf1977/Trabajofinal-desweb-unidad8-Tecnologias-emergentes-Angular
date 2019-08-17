import { Component, OnInit } from '@angular/core'
import { Usermodel, CarritoModel } from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { DatabaseService } from '../../servicios/database.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatosService]
})
export class LoginComponent implements OnInit {

  user : Usermodel
  carrito : CarritoModel
  error_login : boolean

  constructor(private datos: DatosService,  private router: Router, private database : DatabaseService) {
    this.error_login = false;
    if (this.datos.VerificarSesion() != null)
    {
      this.router.navigate(['main'])
    }
  }

  ngOnInit() {
    this.carrito = this.datos.NuevoCarrito()
    this.user = this.datos.NuevoUsuario()
  }

  onSubmit(f: NgForm) {
    this.error_login = true
    if (this.datos.VerificarUsuario(this.user))
    {
      this.error_login = false
      this.datos.IniciarSesion(this.user.email)
      this.router.navigate(['main']);
      this.Guardarcarrito()
    }
  }

  Guardarcarrito() {
    this.carrito.cantidad = 20
    this.carrito.precio = 84
    this.carrito.producto = 'Kiwi'
    this.carrito.usuario =this.user.email
    this.database.savecarrito(this.carrito).subscribe((data : Response) => console.log(""))
  }

  Update_error()
  {
    this.error_login = false;
  }
}


