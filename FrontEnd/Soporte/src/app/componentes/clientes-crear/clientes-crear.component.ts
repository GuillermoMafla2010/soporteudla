import { Sedes } from './../models/Sedes';
import { SedesService } from './../servicios/sedes.service';
import { ClientesService } from './../servicios/clientes.service';
import { Clientes } from './../models/Clientes';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-clientes-crear',
  templateUrl: './clientes-crear.component.html',
  styleUrls: ['./clientes-crear.component.css']
})
export class ClientesCrearComponent implements OnInit {

  private sedes:Sedes;
  private clientes:Clientes=new Clientes
  constructor(private sedesservice:SedesService,private clientesservices:ClientesService) { }

  ngOnInit() {
    this.cargarroles();
  }


  guardaCliente(){
    this.clientesservices.postcliente(this.clientes).subscribe(clientes=>{console.log(this.clientes)})
  }

  cargarroles(){
    this.sedesservice.getSedes().subscribe(sedes=>{this.sedes=sedes})
  }
}
