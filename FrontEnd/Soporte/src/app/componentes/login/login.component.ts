import { Router } from '@angular/router';
import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import {Login} from './login'
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login:Login=new Login;
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit() {
    if(this.loginservice.isAuthenticated()==true){
      this.router.navigate(['/crearcliente'])

      swal.fire("Ya has iniciado sesion",'','info')
    }
  }

  public iniciosesion():void{
    this.loginservice.entrar(this.login).subscribe(auth=>
      {console.log(auth);
        let payload=JSON.parse(atob(auth.token.split(".")[1]))
        console.log(payload.nombre)
        console.log(payload.nombre.length)
        if(auth.data=="Bienvenido")
        {
          this.router.navigate(['/crearcliente'])
          this.loginservice.guardarUsuario(auth.token)
          this.loginservice.guardarToken(auth.token)
          console.log(auth)
        }

      },

      error=>{

        swal.fire("Usuario o contraseña incorrectos",'Introduce de nuevo tus datos','error')
        console.log(error)
      }

      )


  }

}
