import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class PeticionInterceptor implements HttpInterceptor {

  constructor(private router:Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = localStorage.getItem("acces_token");
    let tokenizedReq = request.clone({
      setHeaders:{
        'Accept': 'application/json',
        'Authorization':'Bearer '+token 
      }
    })

    return next.handle(tokenizedReq).pipe(tap(() => {},
    (error:any)=>{
      console.log("Error: ", error)
      if(error instanceof HttpErrorResponse){
        if(error.status!==401){
          return
        }
        localStorage.removeItem("acces_token");
        this.router.navigate(["auth/login"])
      }
    }
    ));
  }
}
