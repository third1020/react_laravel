<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
  Route::post('login', 'Api\User\UserController@login');

  Route::get('/user/index', 'Api\User\UserController@index');
  Route::post('/user/store', 'Api\User\UserController@store');
  Route::get('/user/update/{id}', 'Api\User\UserController@edit');
  Route::put('/user/update/{id}', 'Api\User\UserController@update');
  Route::delete('/user/delete/{id}', 'Api\User\UserController@destroy');
  Route::delete('/user/delete_selected', 'Api\User\UserController@destroy_select');
  Route::get('profile', 'Api\User\UserController@getAuthenticatedUser');


//image
  Route::post('uploadImage', 'Api\Image\ImageController@uploadImage');

//permission

  Route::get('/permission/index', 'Api\Permission\PermissionController@index');
  Route::post('/permission/getPermission', 'Api\Permission\PermissionController@getPermission');
  Route::post('/permission/store', 'Api\Permission\PermissionController@store');
  Route::get('/permission/update/{id}', 'Api\Permission\PermissionController@edit');
  Route::put('/permission/update/{id}', 'Api\Permission\PermissionController@update');
  Route::delete('/permission/delete/{id}', 'Api\Permission\PermissionController@destroy');
  Route::delete('/permission/delete_selected', 'Api\Permission\PermissionController@destroy_select');


//AddressController
  Route::get('/address/index', 'Api\Address\AddressController@index');
  Route::post('/address/store', 'Api\Address\AddressController@store');
  Route::get('/address/update/{id}', 'Api\Address\AddressController@edit');
  Route::put('/address/update/{id}', 'Api\Address\AddressController@update');
  Route::delete('/address/delete/{id}', 'Api\Address\AddressController@destroy');
  Route::delete('/address/delete_selected', 'Api\Address\AddressController@destroy_select');

//EquipmentController
  Route::get('/equipment/index', 'Api\Equipment\EquipmentController@index');
  Route::post('/equipment/store', 'Api\Equipment\EquipmentController@store');
  Route::get('/equipment/update/{id}', 'Api\Equipment\EquipmentController@edit');
  Route::put('/equipment/update/{id}', 'Api\Equipment\EquipmentController@update');
  Route::delete('/equipment/delete/{id}', 'Api\Equipment\EquipmentController@destroy');
  Route::delete('/equipment/delete_selected', 'Api\Equipment\EquipmentController@destroy_select');

//ImpactController
  Route::get('/impact/index', 'Api\Impact\ImpactController@index');
  Route::post('/impact/store', 'Api\Impact\ImpactController@store');
  Route::get('/impact/update/{id}', 'Api\Impact\ImpactController@edit');
  Route::put('/impact/update/{id}', 'Api\Impact\ImpactController@update');
  Route::delete('/impact/delete/{id}', 'Api\Impact\ImpactController@destroy');
  Route::delete('/impact/delete_selected', 'Api\Impact\ImpactController@destroy_select');
//Incident
  Route::get('/incident/index', 'Api\Incident\IncidentController@index');
  Route::post('/incident/store', 'Api\Incident\IncidentController@store');
  Route::get('/incident/update/{id}', 'Api\Incident\IncidentController@edit');
  Route::put('/incident/update/{id}', 'Api\Incident\IncidentController@update');
  Route::delete('/incident/delete/{id}', 'Api\Incident\IncidentController@destroy');
  Route::delete('/incident/delete_selected', 'Api\Incident\IncidentController@destroy_select');

//MessageController
  Route::get('/message/index', 'Api\Message\MessageController@index');
  Route::post('/message/store', 'Api\Message\MessageController@store');
  Route::get('/message/update/{id}', 'Api\Message\MessageController@edit');
  Route::put('/message/update/{id}', 'Api\Message\MessageController@update');
  Route::delete('/message/delete/{id}', 'Api\Message\MessageController@destroy');
  Route::delete('/message/delete_selected', 'Api\Message\MessageController@destroy_select');\

//NewsController
  Route::get('/news/index', 'Api\News\NewsController@index');
  Route::post('/news/store', 'Api\News\NewsController@store');
  Route::get('/news/update/{id}', 'Api\News\NewsController@edit');
  Route::put('/news/update/{id}', 'Api\News\NewsController@update');
  Route::delete('/news/delete/{id}', 'Api\News\NewsController@destroy');
  Route::delete('/news/delete_selected', 'Api\News\NewsController@destroy_select');


//PriorityController
  Route::get('/priority/index', 'Api\Priority\PriorityController@index');
  Route::post('/priority/store', 'Api\Priority\PriorityController@store');
  Route::get('/priority/update/{id}', 'Api\Priority\PriorityController@edit');
  Route::put('/priority/update/{id}', 'Api\Priority\PriorityController@update');
  Route::delete('/priority/delete/{id}', 'Api\Priority\PriorityController@destroy');
  Route::delete('/priority/delete_selected', 'Api\PriorityPriority\PriorityController@destroy_select');


//ProblemsController
  Route::get('/problems/index', 'Api\Problems\ProblemsController@index');
  Route::post('/problems/store', 'Api\Problems\ProblemsController@store');
  Route::get('/problems/update/{id}', 'Api\Problems\ProblemsController@edit');
  Route::put('/problems/update/{id}', 'Api\Problems\ProblemsController@update');
  Route::delete('/problems/delete/{id}', 'Api\Problems\ProblemsController@destroy');
  Route::delete('/problems/delete_selected', 'Api\Problems\ProblemsController@destroy_select');

//RequestController
  Route::get('/request/index', 'Api\Request\RequestController@index');
  Route::post('/request/store', 'Api\Request\RequestController@store');
  Route::get('/request/update/{id}', 'Api\Request\RequestController@edit');
  Route::put('/request/update/{id}', 'Api\Request\RequestController@update');
  Route::delete('/request/delete/{id}', 'Api\Request\RequestController@destroy');
  Route::delete('/request/delete_selected', 'Api\Request\RequestController@destroy_select');
