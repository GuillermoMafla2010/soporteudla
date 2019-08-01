<?php

use App\Users;
use App\Clientes;
namespace App;

use Illuminate\Database\Eloquent\Model;

class Sedes extends Model
{
    //
    protected $table="sedes";

    public function users(){
        return $this->hasMany(User::class,'sede_id');
    }

    public function clientes(){
        return $this->hasMany(Clientes::class,'sede_id');
    }
}
