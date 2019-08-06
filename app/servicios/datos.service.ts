import { Injectable } from '@angular/core';
import { Usermodel } from '../modelos/modelos.module';
import { DatabaseService } from './database.service';
import { Response } from '@angular/http';


@Injectable()
export class DatosService {

  constructor(private database : DatabaseService) {
    this.getdata();
   }

  public data: any = null;

  user: Usermodel;
  users: Usermodel[];

  newuser(): any {
    return {
      email: '',
      passowrd: ''
    };
  }

  getdata(){
    this.database.getdata().subscribe((res : Response)  =>  this.data = res)
  }

  Checkuser(user: Usermodel)
  {
    this.getdata()
    let found : boolean
    found = false
    for (let i=0;i<this.data.length;i++)
    {
      if (user.email == this.data[i].email && user.password == this.data[i].password)
      {
        found =  true
      }
    }
    return found
  }
}
