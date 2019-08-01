import { Requerimiento } from './../models/Requerimiento';
import { RequerimientosService } from './../servicios/requerimientos.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-modal-ver-requerimientos',
  templateUrl: './modal-ver-requerimientos.component.html',
  styleUrls: ['./modal-ver-requerimientos.component.css']
})
export class ModalVerRequerimientosComponent implements OnInit {

  requerimiento:any
  constructor(public dialogRef: MatDialogRef<ModalVerRequerimientosComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private requerimientoervice:RequerimientosService) { }

  ngOnInit() {
    console.log(this.data.nombre)
    this.getRequerimientosPorId()
  }

  async getRequerimientosPorId(){
    await this.requerimientoervice.getRequerimientosPorId(this.data.nombre).subscribe(x=>{
      x.map(y=>{this.requerimiento=y})
      console.log(this.requerimiento)
    })
  }

}
