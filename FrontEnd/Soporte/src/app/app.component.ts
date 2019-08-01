import { Router } from '@angular/router';
import { LoginService } from './componentes/servicios/login.service';
import { Component  , OnInit} from '@angular/core';

import swal from 'sweetalert2'
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Soporte';
  constructor(private loginservice:LoginService,private router:Router){}
  public ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }


  logout(){
    this.loginservice.cerrarSesion()
    swal.fire("Logout","Has cerrado sesion",'info')
    this.router.navigate(['/login'])
  }
}


