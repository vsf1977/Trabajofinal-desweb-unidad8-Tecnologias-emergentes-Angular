import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent },
  {path : 'main', component: MainComponent },
  {path : 'carrito', component: CarritoComponent },
  {path : 'main/detalle/:nombre', component: DetalleComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
