<?php

namespace App\Http\Controllers;

use App\requerimientos;
use Illuminate\Http\Request;
use App\Usuarios;
use App\Estado;
use App\Clientes;
use App\Adjuntos;

class RequerimientosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return requerimientos::with('usuarios','clientes','estados','adjuntos')->get();
    }

    public function verrequerimiento($id){
        return requerimientos::where('id',$id)->with('usuarios','clientes','estados','adjuntos')->get();

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
        $requerimientos=new requerimientos();
        $adjuntos=new Adjuntos();

        $requerimientos->descripcion=$request->input("descripcion");
        $requerimientos->cliente_id=$request->input("cliente_id");
        $requerimientos->user_id=$request->input("user_id");
        $requerimientos->estado_id=$request->input("estado_id");
        $requerimientos->save();

        $adjunto=$request->file('image');
        if($adjunto){
            $image_path=time().$adjunto->getClientOriginalName();
            \Storage::disk('images')->put($image_path,\File::get($adjunto));
            $adjuntos->nombre=$image_path;
        }



        $adjuntos->requerimientos_id=$requerimientos->id;
        $requerimientos->adjuntos()->save($adjuntos);

        $requerimientos->save();

        $data=array('status'=>'success','code'=>200,'mensaje'=>'Usuario Creado correctamente');

        return response()->json($data,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\requerimientos  $requerimientos
     * @return \Illuminate\Http\Response
     */
    public function show(requerimientos $requerimientos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\requerimientos  $requerimientos
     * @return \Illuminate\Http\Response
     */
    public function edit(requerimientos $requerimientos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\requerimientos  $requerimientos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $usuario=new Usuarios();
        $estado=new Estado();
        $cliente=new Clientes();
        $requerimiento=new requerimientos();

        $requerimiento->descripcion=$request->input("descripcion");
        $requerimiento->user_id=$request->input("user_id");
        $requerimiento->estado_id=$request->input("estado_id");
        $requerimiento->cliente_id=$request->input("cliente_id");


$update=requerimientos::where('id',$id)->update($requerimiento->toArray());

$data=[
    "mensaje"=>"Actualizado",
    "status"=>200
];

return response()->json($data);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\requerimientos  $requerimientos
     * @return \Illuminate\Http\Response
     */
    public function destroy(requerimientos $requerimientos)
    {
        //
    }

    public function individual($id,$id1){
        $incidencia = requerimientos::with(['usuarios','clientes','estados'])->wherehas('usuarios',function($q) use($id) {
             $q->where('id',$id);
         })->wherehas('estados',function($q) use($id1){
             $q->where('id',$id1);
         })->get();

         return($incidencia);
     }
}
