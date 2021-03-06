<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Incidencias extends Model
{
    //
    public $timestamps = false;
    protected $table="incidencias";

    public function users(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function usuarios(){
        return $this->belongsTo(Usuarios::class,'user_id');
    }

    public function clientes(){
        return $this->belongsTo(Clientes::class,'cliente_id');
    }

    public function estados(){
        return $this->belongsTo(Estado::class,'estado_id');
    }

    public function adjuntos(){
        return $this->hasMany(Adjuntos::class,'incidencias_id');
    }

}
