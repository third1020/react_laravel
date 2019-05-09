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



  //login auth

  Route::post('login', 'LoginController@Loginprocess');



   //user
    Route::post('user_create', 'UserController@store');
    Route::get('users', 'UserController@index');
    Route::delete('users/{id}', 'UserController@destroy');
    Route::get('user/{id}', 'UserController@edit');
    Route::put('user_update/{id}', 'UserController@update');


    //permission

    Route::get('permission', 'PermissionController@index');
    Route::get('permission_table', 'PermissionController@getTable');
    Route::delete('permission_table/{id}', 'PermissionController@destroy');





  Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});
