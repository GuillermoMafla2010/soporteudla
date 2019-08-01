<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Roles extends Model
{
    //
    protected $table="roles";

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function rol()
    {
        return $this->belongsToMany(UsuariosRoles::class,'roles_id');
    }




}
