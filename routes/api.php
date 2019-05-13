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
    Route::get('users', 'UserController@getTable');
    Route::delete('users/{id}', 'UserController@destroy');
    Route::get('user/{id}', 'UserController@edit');
    Route::put('user_update/{id}', 'UserController@update');
    Route::get('queryuser', 'UserController@index');


    //permission


    Route::get('permission_table', 'PermissionController@getTable');
    Route::delete('permission_table/{id}', 'PermissionController@destroy');
    Route::post('permission', 'PermissionController@store');
    Route::get('permission', 'PermissionController@index');

    //news

    Route::get('news_table', 'NewsController@getTable');
    Route::delete('news_table/{id}', 'NewsController@destroy');
    Route::post('news', 'NewsController@store');
    Route::get('querynews', 'NewsController@index');

    //news_type

    Route::get('news_type_table', 'News_typeController@getTable');
    Route::delete('news_type_table/{id}', 'News_typeController@destroy');
    Route::post('news_type', 'News_typeController@store');
    Route::get('querynews_type', 'News_typeController@index');

    //message

    Route::get('message_table', 'MessageController@getTable');
    Route::delete('message_table/{id}', 'MessageController@destroy');
    Route::post('message', 'MessageController@store');
    Route::get('querymessage', 'MessageController@index');

    //equipment

    Route::get('equipment_table', 'EquipmentController@getTable');
    Route::delete('equipment_table/{id}', 'EquipmentController@destroy');
    Route::post('equipment', 'EquipmentController@store');
    Route::get('queryequipment', 'EquipmentController@index');

    //equipment_register

    Route::get('equipment_register_table', 'Equipment_registerController@getTable');
    Route::delete('equipment_register_table/{id}', 'Equipment_registerController@destroy');
    Route::post('equipment_register', 'Equipment_registerController@store');
    Route::get('queryequipment_register', 'Equipment_registerController@index');

    //equipment_type

    Route::get('equipment_type_table', 'Equipment_typeController@getTable');
    Route::delete('equipment_type_table/{id}', 'Equipment_typeController@destroy');
    Route::post('equipment_type', 'Equipment_typeController@store');
    Route::get('queryequipment_type', 'Equipment_typeController@index');

    //request

    Route::get('request_table', 'RequestController@getTable');
    Route::delete('request_table/{id}', 'RequestController@destroy');
    Route::post('request', 'RequestController@store');
    Route::get('queryrequest', 'RequestController@index');

    //problems

    Route::get('problems_table', 'ProblemsController@getTable');
    Route::delete('problems_table/{id}', 'ProblemsController@destroy');
    Route::post('problems', 'ProblemsController@store');
    Route::get('queryproblems', 'ProblemsController@index');

    //incident

    Route::get('incident_table', 'IncidentController@getTable');
    Route::delete('incident_table/{id}', 'IncidentController@destroy');
    Route::post('incident', 'IncidentController@store');
    Route::get('queryincident', 'IncidentController@index');

    //contact

    Route::get('contact_table', 'ContactController@getTable');
    Route::delete('contact_table/{id}', 'ContactController@destroy');
    Route::post('contact', 'ContactController@store');
    Route::get('querycontact', 'ContactController@index');

    //impact

    Route::get('impact_table', 'ImpactController@getTable');
    Route::delete('impact_table/{id}', 'ImpactController@destroy');
    Route::post('impact', 'ImpactController@store');
    Route::get('queryimpact', 'ImpactController@index');

    //priority

    Route::get('priority_table', 'PriorityController@getTable');
    Route::delete('priority_table/{id}', 'PriorityController@destroy');
    Route::post('priority', 'PriorityController@store');
    Route::get('querypriority', 'PriorityController@index');






  Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});
