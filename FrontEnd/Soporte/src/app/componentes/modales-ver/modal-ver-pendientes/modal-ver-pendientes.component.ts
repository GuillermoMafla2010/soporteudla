import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';
import {IncidenciasService} from '../../servicios/incidencias.service';


@Component({
  selector: 'app-modal-ver-pendientes',
  templateUrl: './modal-ver-pendientes.component.html',
  styleUrls: ['./modal-ver-pendientes.component.css']
})
export class ModalVerPendientesComponent implements OnInit {

  public incidencia:any
  constructor(public dialogRef: MatDialogRef<ModalVerPendientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private incidenciaservice:IncidenciasService) { }

  ngOnInit() {
    console.log(this.data.nombre)
    this.getIncidencia()
  }

  getIncidencia(){
    this.incidenciaservice.getIncidenciasPorId(this.data.nombre).subscribe(x=>{
      x.map(y=>{
        this.incidencia=y
      })
    })

  }

}
