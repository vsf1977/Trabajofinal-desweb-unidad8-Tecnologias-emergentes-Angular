import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CommonModule } from '@angular/common';
import { DatosService } from './servicios/datos.service';
import { DatabaseService } from './servicios/database.service';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { MainComponent } from './componentes/main/main.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraSuperiorComponent,
    MainComponent,
    DetalleComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CommonModule
  ],
  providers: [DatabaseService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
