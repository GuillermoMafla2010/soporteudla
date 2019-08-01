import { Clientes } from './../models/Clientes';
import { ClientesService } from './../servicios/clientes.service';
import { Component, OnInit ,ViewChild} from '@angular/core';


@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent implements OnInit {

  private clientes:Clientes[]
  displayedColumns: string[] = ['position', 'name', 'weight','requerimientos', 'symbol',];
  private datasource:[]
  constructor(private clienteservice:ClientesService) { }

  ngOnInit() {

    this.verClientes();
  }

  verClientes(){
    this.clienteservice.getClientes().subscribe(clientes=>{this.clientes=clientes;console.log(this.clientes)});
  }

  applyFilter(filterValue: any) {
    if(filterValue==null || filterValue.length==0){
      this.verClientes();
    }else{
      this.clienteservice.buscarclientepornombre(filterValue).subscribe(nuevo=>{
        this.clientes=nuevo  })
    }




  }



}
