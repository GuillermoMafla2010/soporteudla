import { IncidenciasService } from './../servicios/incidencias.service';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-ver-incidencia',
  templateUrl: './modal-ver-incidencia.component.html',
  styleUrls: ['./modal-ver-incidencia.component.css']
})
export class ModalVerIncidenciaComponent implements OnInit {

  incidencia:any[]
  public loading:true
  constructor(public dialogRef: MatDialogRef<ModalVerIncidenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public incidenciaservice:IncidenciasService) { }

  ngOnInit() {

    this.getIncidencia();
    console.log(this.data.nombre)
  }

  getIncidencia(){
    this.incidenciaservice.getIncidenciasPorId(this.data.nombre as number).subscribe(x=>{
      x.map(y=>this.incidencia=y)
      console.log(this.incidencia)
    })




  }


}
