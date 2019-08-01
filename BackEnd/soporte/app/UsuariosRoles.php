<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsuariosRoles extends Model
{
    //
    protected $fillable = ['user_id','roles_id'];
    protected $table="roles_user";
    public $timestamps = false;

    public function usuario(){
        return $this->belongsTo(Usuarios::class);
    }

    public function rol(){
        return $this->belongsTo(Roles::class);
    }


}
