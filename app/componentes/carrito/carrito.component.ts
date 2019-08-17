import { Component, OnInit } from '@angular/core';
import { CarritoModel} from '../../modelos/modelos.module'
import { DatosService } from '../../servicios/datos.service'
import { DatabaseService } from '../../servicios/database.service';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito :  CarritoModel[]
  patron : string
  total : number

    constructor(private database : DatabaseService,private datos: DatosService,  private router: Router)
    {
      if (this.datos.VerificarSesion() == null)
      {
        this.router.navigate(['/login'])
      }
      else
      {
        this.ListaCarrito(this.datos.VerificarSesion())
      }
    }

    ngOnInit() {

    }


    ListaCarrito(user : string)
    {
      this.database.getCarrito(user).subscribe(() => {
        this.carrito = this.database.carrito
        this.total =  this.database.cuentatotal
      })
    }

}
