<?php

namespace App\Http\Controllers;

use App\Adjuntos;
use Illuminate\Http\Request;

class AdjuntosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $nuevoadjuntos=new Adjuntos();
        $adjuntos=$request->file('image');
        if($adjuntos){
            $image_path=time().$adjuntos->getClientOriginalName();
            \Storage::disk('images')->put($image_path,\File::get($adjuntos));
            $nuevoadjuntos->nombre=$image_path;
        }
            $nuevoadjuntos->save();
        return response()->json("Subido");


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Adjuntos  $adjuntos
     * @return \Illuminate\Http\Response
     */
    public function show(Adjuntos $adjuntos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Adjuntos  $adjuntos
     * @return \Illuminate\Http\Response
     */
    public function edit(Adjuntos $adjuntos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Adjuntos  $adjuntos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adjuntos $adjuntos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Adjuntos  $adjuntos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Adjuntos $adjuntos)
    {
        //
    }
}
