<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Usuarios;
use App\Sedes;
use App\UsuariosRoles;
use JWTAuth;
use JWTAuthException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use function Opis\Closure\unserialize;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()

    {

           // $usuarios=Usuarios::all();
           // return response()->json(array('usuarios'=>$usuarios,'status'=>'success'),200);

          // return Usuarios::with('parentable')->get()->loadMorph('parentable',[Roles::class=>['idrol']]);

          //
          return User::with(['roles','sede'])->get();






    }


    public function rolesTecnico($id){

       $usuario = User::with(['roles','sede'])->wherehas('roles', function($q) use($id) {

            $q->where('nombre_rol','Tecnico')->where('sede_id',$id);

        })->get();

        return ($usuario);


    }




        public function prueba(){
            $usuario=User::with(['roles','sede'])->get();
            $nombre_rol=[];
            foreach ($usuario as $u){
              $nombre_rol=$u->roles;
            }

            foreach($nombre_rol as $nombre){
                return response()->json($nombre->nombre_rol);
            }


        }



    public function login(Request $request){
         $usuario=User::where('email',$request->email)->get()->load('roles')->first();


        if($usuario && \Hash::check($request->password,$usuario->password) ){
           // $token=self::getToken($request->email, $request->password);

            $payloadable = [
                'id' => $usuario->id,
                'nombre' => $usuario->nombre,
                'roles' => $usuario->roles,

            ];

           $token= JWTAuth::customClaims($payloadable)->attempt(['email' =>$request->email , 'password' => $request->password]);


            $respuesta=['token'=>$token,'success'=>true,'data'=>'Bienvenido'];
            return response()->json($respuesta,201);

        }else{

            $respuesta=['success'=>false,'data'=>'Usuario o contraseña no encontrados'];
            return response()->json($respuesta,400);
        }

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
        //Instancio la clase Usuario
        $usuario=new Usuarios();
        $roles=new UsuariosRoles();
        $sedes=new Sedes();
        //Declaro el nombre enviado desde frontend
        $usuario->nombre=$request->input('nombre');
        $usuario->email=$request->input('email');
        $usuario->password=\Hash::make($request->input('password'));
        $usuario->sede_id=$request->input('sede_id');
        $usuario->save();

        $roles->roles_id=$request->input('roles_id');
        $roles->user_id=$usuario->id;
        $usuario->rol()->save($roles);




        $data=array('status'=>'success','code'=>200,'mensaje'=>'Usuario Creado correctamente');

        return response()->json($data,200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        return User::where('id',$id)->with(['roles','sede'])->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $parametros=new Usuarios();
        $roles=new UsuariosRoles();

        $parametros->nombre=$request->input('nombre');
        $parametros->email=$request->input('email');
        $parametros->sede_id=$request->input('sede_id');

        $roles->roles_id=$request->input('roles_id');
        //$roles->user_id=$parametros->id;
        $parametros->rol()->update($roles->toArray());

        $updateuser=Usuarios::where('id',$id)->update($parametros->toArray());
        $updateroles=UsuariosRoles::where('user_id',$id)->update($roles->toArray());
        $data=[
            'status'=>200,
            'mensaje'=>"Actualizado satisfactoriamente"
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
