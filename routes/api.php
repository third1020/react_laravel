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
Route::get('projects', 'ProjectController@index');
  Route::post('projects', 'ProjectController@store');
  Route::get('projects/{id}', 'ProjectController@show');
  Route::put('projects/{project}', 'ProjectController@markAsCompleted');
  Route::post('tasks', 'TaskController@store');
  Route::put('tasks/{task}', 'TaskController@markAsCompleted');


  //login auth

  Route::post('login', 'LoginController@Loginprocess');



   //user
    Route::post('user_create', 'UserController@store');
    Route::get('user', 'UserController@index');
    Route::delete('user/{id}', 'UserController@destroy');
    Route::get('user/{id}', 'UserController@edit');
    Route::put('user_update/{id}', 'UserController@update');


    //permission

    Route::get('permission', 'PermissionController@index');



  Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

   Route::get('users', 'UserController@index')->name('users');
