import { Component, OnInit } from '@angular/core'
import { Usermodel } from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatosService]
})
export class LoginComponent implements OnInit {

  user : Usermodel
  error_login : boolean
  usuarios : Usermodel[]

  constructor(private datos: DatosService,  private router: Router) {
    this.error_login = false;
  }

  ngOnInit() {
    this.user = this.datos.newuser()
  }

  onSubmit(f: NgForm) {
    this.error_login = true
    if (this.datos.Checkuser(this.user))
    {
      this.error_login = false
      this.router.navigate(['main']);
    }
  }

  Update_error()
  {
    this.error_login = false;
  }
}


