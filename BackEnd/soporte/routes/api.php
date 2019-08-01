<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Rutas para el controolador de los usuarios


//Rutas para el controlador de los roles
Route::resource('roles','RolesController');
Route::post('login','UsuariosController@login');
Route::get('prueba','UsuariosController@prueba');
Route::get('individual/{id}/{id1}','IncidenciasController@individual');
Route::get('individualreq/{id}/{id1}','RequerimientosController@individual');

//Ruta para el login
Route::group(['middleware'=>['cors',/*'jwt.auth'*/]],function(){
   // Route::post('login','UsuariosController@login');
    Route::resource('users','UsuariosController');
    Route::resource('roles','RolesController');
    Route::resource('sedes','SedesController');
    Route::resource('clientes','ClientesController');
    Route::resource('incidencia','IncidenciasController');
    Route::resource('requerimiento','RequerimientosController');
    Route::get('rolestecnico/{id}',"UsuariosController@rolesTecnico");
    Route::get('buscar/{nombre}',"ClientesController@buscar");
    Route::resource('estados','EstadoController');
    Route::resource('adjuntos','AdjuntosController');
    Route::get('incidencias/{id}','IncidenciasController@verincidencia');
    Route::get('requerimientos/{id}','RequerimientosController@verrequerimiento');
    Route::get('sedeid/{id}','SedesController@sedeporid');
});




Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');


});
