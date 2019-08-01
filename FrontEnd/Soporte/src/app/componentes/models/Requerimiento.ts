import { Usuario } from './../usuario-crear/usuario';
import { Estados } from './Estados';
import { Clientes } from './Clientes';


export class Requerimiento{
  id:number;
  descripcion:string;
  user_id:number;
  estado_id:number;
  cliente_id:number;
  usuarios:Usuario;
  estados:Estados;
  Clientes:Clientes;

}
