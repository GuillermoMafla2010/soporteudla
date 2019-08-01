<?php

namespace App\Http\Controllers;

use App\Incidencias;
use Illuminate\Http\Request;
use App\Usuarios;
use App\Estado;
use App\Clientes;

class IncidenciasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Incidencias::with('usuarios','clientes','estados')->get();

    }

    public function verincidencia($id){
        return Incidencias::where('id',$id)->with('usuarios','clientes','estados')->get();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $usuario=new Usuarios();
        $estado=new Estado();
        $cliente=new Clientes();
        $incidencia=new Incidencias();

        $incidencia->descripcion=$request->input("descripcion");
        $incidencia->cliente_id=$request->input("cliente_id");
        $incidencia->user_id=$request->input("user_id");
        $incidencia->estado_id=$request->input("estado_id");

        $incidencia->save();

        $data=array('status'=>'success','code'=>200,'mensaje'=>'Usuario Creado correctamente');

        return response()->json($data,200);


    }



       /*  $usuario = User::with(['roles','sede'])->wherehas('roles', function($q) use($id) {

            $q->where('nombre_rol','Tecnico')->where('sede_id',$id);

        })->get();

        return ($usuario); */


    /**
     * Display the specified resource.
     *
     * @param  \App\Incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function show(Incidencias $incidencias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function edit(Incidencias $incidencias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $usuario=new Usuarios();
        $estado=new Estado();
        $cliente=new Clientes();
        $incidencia=new Incidencias();

        $incidencia->descripcion=$request->input("descripcion");
        $incidencia->user_id=$request->input("user_id");
        $incidencia->estado_id=$request->input("estado_id");
        $incidencia->cliente_id=$request->input("cliente_id");
        $incidencia->solucion=$request->input("solucion");


$update=Incidencias::where('id',$id)->update($incidencia->toArray());

$data=[
    "mensaje"=>"Actualizado",
    "status"=>200
];

return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Incidencias  $incidencias
     * @return \Illuminate\Http\Response
     */
    public function destroy(Incidencias $incidencias)
    {
        //
    }


    public function individual($id,$id1){
        $incidencia = Incidencias::with(['usuarios','clientes','estados'])->wherehas('usuarios',function($q) use($id) {
             $q->where('id',$id);
         })->wherehas('estados',function($q) use($id1){
             $q->where('id',$id1);
         })->get();

         return($incidencia);
     }
}
