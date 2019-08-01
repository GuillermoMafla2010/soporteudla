import { UsuarioEditar } from './../usuario-editar/usuarioeditar';

export class Sedes{
    id:number;
    nombre_sede:string;
    clientes:[]=[];
    users:[]=[];
    usuarioeditar:UsuarioEditar[]
}
