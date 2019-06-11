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


Route::post('CreateUser', 'Api\User\UserController@CreateUser');
Route::post('login', 'Api\User\UserController@login');
Route::middleware('cors')->get('profile', 'Api\User\UserController@getAuthenticatedUser');
Route::middleware('cors')->get('/user/indexretrun', 'Api\User\UserController@indexretrun');
Route::middleware('cors')->delete('/user/delete/{id}', 'Api\User\UserController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
return $request->user();
});
