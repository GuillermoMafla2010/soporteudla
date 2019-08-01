import { Usuario } from './../usuario-crear/usuario';
import { Estados } from './Estados';
import { Clientes } from './Clientes';

export class Incidencia{
  id:number;
  descripcion:string;
  user_id:number;
  estado_id:number;
  cliente_id:number;
  solucion:string;
  usuarios:Usuario;
  estados:Estados;
  clientes:Clientes;
}
