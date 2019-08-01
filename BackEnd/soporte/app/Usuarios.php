<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Usuarios extends Model
{
    public $timestamps = false;
    protected $table ="users";
    protected $fillable = ['nombre', 'email','sede_id','roles_id'];



    public function roles()
    {
        return $this->belongsToMany(Roles::class);
    }

    public function rol(){
        return $this->hasMany(UsuariosRoles::class,'user_id');
    }

    public function sede(){
        return $this->belongsTo(Sedes::class);
    }

    public function incidencias(){
        return $this->hasMany(Incidencias::class,'user_id');
    }

    public function requerimientos(){
        return $this->hasMany(requerimientos::class,'user_id');
    }





}
