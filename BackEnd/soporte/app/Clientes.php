<?php

namespace App;
use App\Sedes;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    //
    public $timestamps = false;
    protected $table="clientes";

    public function sedes(){
        return $this->belongsTo(Sedes::class,'sede_id');
    }

    public function incidencias(){
        return $this->hasMany(Incidencias::class,'cliente_id');
    }

    public function requerimientos(){
        return $this->hasMany(requerimientos::class,'cliente_id');
    }
}
