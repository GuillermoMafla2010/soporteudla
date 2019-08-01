<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adjuntos extends Model
{
    //
    protected $table="adjuntos";
    public $timestamps=false;

    public function incidencias(){
        return $this->belongsTo(Adjuntos::class,'incidencias_id');
    }

    public function requerimientos(){
        return $this->belongsTo(Adjuntos::class,'requerimientos_id');
    }


}
