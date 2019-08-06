import { Component } from '@angular/core';
import { DatosService } from './servicios/datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatosService]
})
export class AppComponent {}
