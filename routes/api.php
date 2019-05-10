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

    //news

    Route::get('news_table', 'NewsController@getTable');
    Route::delete('news_table/{id}', 'NewsController@destroy');

    //news_type

    Route::get('news_type_table', 'News_typeController@getTable');
    Route::delete('news_type_table/{id}', 'News_typeController@destroy');

    //message

    Route::get('message_table', 'MessageController@getTable');
    Route::delete('message_table/{id}', 'MessageController@destroy');

    //equipment

    Route::get('equipment_table', 'EquipmentController@getTable');
    Route::delete('equipment_table/{id}', 'EquipmentController@destroy');

    //equipment_register

    Route::get('equipment_register_table', 'Equipment_registerController@getTable');
    Route::delete('equipment_register_table/{id}', 'Equipment_registerController@destroy');

    //equipment_type

    Route::get('equipment_type_table', 'Equipment_typeController@getTable');
    Route::delete('equipment_type_table/{id}', 'Equipment_typeController@destroy');

    //request

    Route::get('request_table', 'RequestController@getTable');
    Route::delete('request_table/{id}', 'RequestController@destroy');

    //problems

    Route::get('problems_table', 'ProblemsController@getTable');
    Route::delete('problems_table/{id}', 'ProblemsController@destroy');

    //incident

    Route::get('incident_table', 'IncidentController@getTable');
    Route::delete('incident_table/{id}', 'IncidentController@destroy');

    //contact

    Route::get('contact_table', 'ContactController@getTable');
    Route::delete('contact_table/{id}', 'ContactController@destroy');

    //impact

    Route::get('impact_table', 'ImpactController@getTable');
    Route::delete('impact_table/{id}', 'ImpactController@destroy');

    //priority

    Route::get('priority_table', 'PriorityController@getTable');
    Route::delete('priority_table/{id}', 'PriorityController@destroy');






  Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});
