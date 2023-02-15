import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ThemeProvider } from '@material-ui/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  mis_datos:any;

  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
    this.AuthService.perfil().subscribe(
      (res:any)=>{
        this.mis_datos = res
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
