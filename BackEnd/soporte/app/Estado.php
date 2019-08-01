<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    //
    protected $table="estados";

    public function incidencias(){
        return $this->hasMany(Incidencias::class,'estado_id');
    }


    public function requerimientos(){
        return $this->hasMany(requerimientos::class,'estado_id');
    }
}
