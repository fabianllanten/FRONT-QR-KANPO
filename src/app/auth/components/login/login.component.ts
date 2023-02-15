import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompareArrowsOutlined } from '@material-ui/icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
  });

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  ingresar()
  {
    this.authService.loginLaravel(this.loginForm.value).subscribe(
      (res:any)=>{
        console.log(res)
        localStorage.setItem("acces_token", res.access_token)
        this.router.navigate(["/admin/perfil"])
      },
      (error:any)=>{
        console.log(error)
        alert("error de autenticaion")
      }
      
    )
  }

}
