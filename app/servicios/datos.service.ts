import { Injectable } from '@angular/core';
import { Usermodel } from '../modelos/modelos.module';
import { DatabaseService } from './database.service';;
import 'rxjs/Rx';

@Injectable()
export class DatosService {

  constructor(private database : DatabaseService) {
    this.ListaUsuarios()
   }

  private usuarios : Usermodel[]

  newuser(): any {
    return {
      email: '',
      passowrd: ''
    };
  }

  ListaUsuarios() {
    this.database.getUsers().subscribe(() => this.usuarios = this.database.usuarios)
  }

  Checkuser(user: Usermodel)
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
}
