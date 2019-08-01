import { Sedes } from './../models/Sedes';
import { Roles } from './../roles/roles';


export class UsuarioEditar{
  id:number;
  nombre:string;
  email:string;
  roles:Roles[];
  roles_id:number;
  sede_id:number;
}
