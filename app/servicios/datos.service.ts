import { Injectable } from '@angular/core';
import { Usermodel, CarritoModel } from '../modelos/modelos.module';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class DatosService {

  constructor(private database : DatabaseService, private router: Router) {
    this.ListaUsuarios()
   }

  public usuarios : Usermodel[]
  public carrito : CarritoModel[]

  NuevoUsuario(): any {
    return {
      email: '',
      passowrd: ''
    };
  }

  NuevoCarrito(): any {
    return {
      usuario : '',
      producto: '',
      precio : 0,
      cantidad : 0
    }
  }

  ListaUsuarios() {
    this.database.getUsers().subscribe(() => this.usuarios = this.database.usuarios)
  }

  VerificarUsuario(user: Usermodel)
  {
    let found : boolean
    found = false
    for (let i=0;i<this.usuarios.length;i++)
    {
      if (user.email == this.usuarios[i].email && user.password == this.usuarios[i].password)
      {
        found =  true
      }
    }
    return found
  }

  VerificarSesion()
  {
    let usuario_log :  string
    usuario_log = localStorage.getItem('usuario')
    if (usuario_log != null)
    {
      return usuario_log
    }
    else
    {
      return null
    }
  }

  IniciarSesion(usuario :  string)
  {
    localStorage.setItem('usuario',usuario)
    for (let i=0;i<this.usuarios.length;i++)
    {
      if (usuario == this.usuarios[i].email)
      {
        localStorage.setItem('nombre',this.usuarios[i].nombre)
      }
    }
  }

  CerrarSesion()
  {
    localStorage.removeItem('usuario')
    localStorage.removeItem('nombre')
  }

}
