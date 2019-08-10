import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class ModelosModule { }

export interface Usermodel {
  email: string;
  password: string
}

export interface ProductModel {
  nombre: string;
  precio : number,
  unidades : number
}

