import { Incidencia } from './../models/Incidencia';
import { IncidenciasService } from './../servicios/incidencias.service';
import { Estados } from './../models/Estados';
import { EstadoService } from './../servicios/estado.service';
import { TecnicosService } from './../servicios/tecnicos.service';
import { Tecnico } from './../models/Tecnicos';
import { Clientes } from './../models/Clientes';
import { Sedes } from './../models/Sedes';
import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-incidencia-crear',
  templateUrl: './incidencia-crear.component.html',
  styleUrls: ['./incidencia-crear.component.css']
})
export class IncidenciaCrearComponent implements OnInit {
 sedes:Sedes[]=[]
 clientes:Clientes[]
 tecnicos:Tecnico[]
 estados:Estados[]
 incidencia:Incidencia=new Incidencia
  constructor(private incidenciaservice:IncidenciasService,private sedeservice:SedesService , private tecnicoservice:TecnicosService , private estadoservice:EstadoService) { }

  onChange(newValue) {
    console.log(newValue);
    console.log(this.sedes);
    this.sedes.map(x=>{if(x.id==newValue){
      this.clientes=x.clientes;
      this.tecnicoservice.getTecnicos(newValue as number).subscribe(tecnicos=>{
        this.tecnicos=tecnicos
      })

    }});

    console.log(this.clientes)

    }

  ngOnInit() {
    this.cargasedes();
    this.cargaestados();

  }

  cargasedes(){
    this.sedeservice.getSedes().subscribe(sedes=>{this.sedes=sedes;console.log(this.sedes)});
  }

  cargaestados(){
    this.estadoservice.getEstados().subscribe(estados=>{this.estados=estados});
  }

  creaIncidencia(){
   this.incidenciaservice.postIncidencia(this.incidencia).subscribe(caso=>{console.log(caso)});

  }









}
