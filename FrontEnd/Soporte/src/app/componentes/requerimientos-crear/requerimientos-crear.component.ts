import { RequerimientosService } from './../servicios/requerimientos.service';
import { EstadoService } from './../servicios/estado.service';
import { Tecnico } from './../models/Tecnicos';
import { Requerimiento } from './../models/Requerimiento';
import { Clientes } from './../models/Clientes';
import { TecnicosService } from './../servicios/tecnicos.service';
import { Sedes } from './../models/Sedes';
import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../servicios/clientes.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-requerimientos-crear',
  templateUrl: './requerimientos-crear.component.html',
  styleUrls: ['./requerimientos-crear.component.css']
})
export class RequerimientosCrearComponent implements OnInit {

  private requerimiento:Requerimiento=new Requerimiento;
  public sedes:Sedes[]
  private tecnicos:Tecnico[]
  public clientes:Clientes[]
  public estados:any[]
  public archivo:File
  constructor(private sedeservice:SedesService,
              private tecnicosservice:TecnicosService,
              private clienteservice:ClientesService,
              private estadoservice:EstadoService,
              private requerimientoservice:RequerimientosService) { }

  ngOnInit() {
    this.getsedes();
    this.getestados();
  }

  onChange(newValue) {
    console.log(newValue.id);

    this.sedes.map(x=>{
      if(x.id===newValue.id){
        //this.tecnicos.push(x.users)
        this.clientes=x.clientes

        this.tecnicosservice.getTecnicos(newValue.id).subscribe(x=>{
          this.tecnicos=x
          console.log(this.tecnicos)
        })





      }
    })
  };

  getsedes(){
    this.sedeservice.getSedes().subscribe(x=>{
      this.sedes=x
      console.log(this.sedes)

    })
  }

  getestados(){
    this.estadoservice.getEstados().subscribe(x=>{
      this.estados=x
    })
  }

  seleccionarFoto(event){
    this.archivo=event.target.files[0];
    console.log(this.archivo)
  }

  postrequest(){
      console.log(this.requerimiento.descripcion,
                  this.requerimiento.user_id,
                  this.requerimiento.cliente_id,
                  this.requerimiento.estado_id,
                  this.archivo)

                  this.requerimientoservice.postRequerimientos(this.requerimiento.descripcion,
                    this.requerimiento.user_id,
                    this.requerimiento.estado_id,
                    this.requerimiento.cliente_id,
                    this.archivo).subscribe(x=>{
                      swal.fire("Exito","Subido correctamente","success")
                    })
  }





}
