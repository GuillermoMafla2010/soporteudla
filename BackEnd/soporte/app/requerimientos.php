<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class requerimientos extends Model
{
    //
    public $timestamps = false;
    protected $table="requerimientos";

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
        return $this->hasMany(Adjuntos::class,'requerimientos_id');
    }
}
