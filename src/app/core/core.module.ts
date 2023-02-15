import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionInterceptor } from '../interceptor/peticion.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:PeticionInterceptor,
      multi:true
    }
  ]
})
export class CoreModule { }
