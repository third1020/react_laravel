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

    Route::post('login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout')->name('logout');
    // Route::post('login', 'LoginController@Loginprocess');

    /*
    * Password Reset Route(S)
    */
    Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
    /*
    * Email Verification Route(s)
    */
    Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
    Route::get('email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::get('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
   //user
    Route::post('user_create', 'Api\User\UserController@store');
    Route::get('users', 'Api\User\UserController@getTable');
    Route::delete('users/{id}', 'Api\User\UserController@destroy');
    Route::get('queryuser', 'Api\User\UserController@index');
    Route::get('user/{id}', 'Api\User\UserController@edit');
    Route::put('user_update/{id}', 'Api\User\UserController@update');
    Route::delete('users', 'Api\User\UserController@destroy_select');

    //permission

    Route::get('permission_table', 'Api\Permission\PermissionController@getTable');
    Route::delete('permission_table/{id}', 'Api\Permission\PermissionController@destroy');
    Route::post('permission', 'Api\Permission\PermissionController@store');
    Route::get('permission', 'Api\Permission\PermissionController@index');
    Route::get('permission/{id}', 'Api\Permission\PermissionController@edit');
    Route::put('permission_update/{id}', 'Api\Permission\PermissionController@update');
    Route::delete('permission_table', 'Api\Permission\PermissionController@destroy_select');

    //news

    Route::get('news_table', 'Api\News\NewsController@getTable');
    Route::delete('news_table/{id}', 'Api\News\NewsController@destroy');
    Route::post('news', 'Api\News\NewsController@store');
    Route::post('news/image', 'Api\News\NewsController@upload_image');
    Route::get('querynews', 'Api\News\NewsController@index');
    Route::get('news/{id}', 'Api\News\NewsController@edit');
    Route::put('news_update/{id}', 'Api\News\NewsController@update');
    Route::delete('news_table', 'Api\News\NewsController@destroy_select');

    //news_type

    Route::get('news_type_table', 'Api\News\NewsTypeController@getTable');
    Route::delete('news_type_table/{id}', 'Api\News\NewsTypeController@destroy');
    Route::delete('news_type_table', 'Api\News\NewsTypeController@destroy_select');
    Route::post('news_type', 'Api\News\NewsTypeController@store');
    Route::get('querynews_type', 'Api\News\NewsTypeController@index');
    Route::get('news_type/{id}', 'Api\News\NewsTypeController@edit');
    Route::put('news_type_update/{id}', 'Api\News\NewsTypeController@update');

    //message

    Route::get('message_table', 'Api\Message\MessageController@getTable');
    Route::delete('message_table/{id}', 'Api\Message\MessageController@destroy');
    Route::post('message', 'Api\Message\MessageController@store');
    Route::get('querymessage', 'Api\Message\MessageController@index');
    Route::get('message/{id}', 'Api\Message\MessageController@edit');
    Route::put('message_update/{id}', 'Api\Message\MessageController@update');
    Route::delete('message_table', 'Api\Message\MessageController@destroy_select');

    //equipment

    Route::get('equipment_table', 'Api\Equipment\EquipmentController@getTable');
    Route::delete('equipment_table/{id}', 'Api\Equipment\EquipmentController@destroy');
    Route::post('equipment', 'Api\Equipment\EquipmentController@store');
    Route::get('queryequipment', 'Api\Equipment\EquipmentController@index');
    Route::get('equipment/{id}', 'Api\Equipment\EquipmentController@edit');
    Route::put('equipment_update/{id}', 'Api\Equipment\EquipmentController@update');
    Route::delete('equipment_table', 'Api\Equipment\EquipmentController@destroy_select');

    //equipment_register

    Route::get('equipment_register_table', 'Api\Equipment\EquipmentRegisterController@getTable');
    Route::delete('equipment_register_table/{id}', 'Api\Equipment\EquipmentRegisterController@destroy');
    Route::post('equipment_register', 'Api\Equipment\EquipmentRegisterController@store');
    Route::get('queryequipment_register', 'Api\Equipment\EquipmentRegisterController@index');
    Route::get('equipment_register/{id}', 'Api\Equipment\EquipmentRegisterController@edit');
    Route::put('equipment_register_update/{id}', 'Api\Equipment\EquipmentRegisterController@update');
    Route::delete('equipment_register_table', 'Api\Equipment\EquipmentRegisterController@destroy_select');

    //equipment_type

    Route::get('equipment_type_table', 'Api\Equipment\EquipmentTypeController@getTable');
    Route::delete('equipment_type_table/{id}', 'Api\Equipment\EquipmentTypeController@destroy');
    Route::post('equipment_type', 'Api\Equipment\EquipmentTypeController@store');
    Route::get('queryequipment_type', 'Api\Equipment\EquipmentTypeController@index');
    Route::get('equipment_type/{id}', 'Api\Equipment\EquipmentTypeController@edit');
    Route::put('equipment_type_update/{id}', 'Api\Equipment\EquipmentTypeController@update');
    Route::delete('equipment_type_table', 'Api\Equipment\EquipmentTypeController@destroy_select');

    //request

    Route::get('request_table', 'Api\Request\RequestController@getTable');
    Route::delete('request_table/{id}', 'Api\Request\RequestController@destroy');
    Route::post('request', 'Api\Request\RequestController@store');
    Route::get('queryrequest', 'Api\Request\RequestController@index');
    Route::get('request/{id}', 'Api\Request\RequestController@edit');
    Route::put('request_update/{id}', 'Api\Request\RequestController@update');
    Route::delete('request_table', 'Api\Request\RequestController@destroy_select');

    //problems

    Route::get('problems_table', 'Api\Problems\ProblemsController@getTable');
    Route::delete('problems_table/{id}', 'Api\Problems\ProblemsController@destroy');
    Route::post('problems', 'Api\Problems\ProblemsController@store');
    Route::get('queryproblems', 'Api\Problems\ProblemsController@index');
    Route::get('problems/{id}', 'Api\Problems\ProblemsController@edit');
    Route::put('problems_update/{id}', 'Api\Problems\ProblemsController@update');
    Route::delete('problems_table', 'Api\Problems\ProblemsController@destroy_select');

    //incident

    Route::get('incident_table', 'Api\Incident\IncidentController@getTable');
    Route::delete('incident_table/{id}', 'Api\Incident\IncidentController@destroy');
    Route::post('incident', 'Api\Incident\IncidentController@store');
    Route::get('queryincident', 'Api\Incident\IncidentController@index');
    Route::get('incident/{id}', 'Api\Incident\IncidentController@edit');
    Route::put('incident_update/{id}', 'Api\Incident\IncidentController@update');
    Route::delete('incident_table', 'Api\Incident\IncidentController@destroy_select');

    //contact

    Route::get('contact_table', 'Api\Contact\ContactController@getTable');
    Route::delete('contact_table/{id}', 'Api\Contact\ContactController@destroy');
    Route::post('contact', 'Api\Contact\ContactController@store');
    Route::get('querycontact', 'Api\Contact\ContactController@index');
    Route::get('contact/{id}', 'Api\Contact\ContactController@edit');
    Route::put('contact_update/{id}', 'Api\Contact\ContactController@update');
    Route::delete('contact_table', 'Api\Contact\ContactController@destroy_select');

    //impact

    Route::get('impact_table', 'Api\Impact\ImpactController@getTable');
    Route::delete('impact_table/{id}', 'Api\Impact\ImpactController@destroy');
    Route::post('impact', 'Api\Impact\ImpactController@store');
    Route::get('queryimpact', 'Api\Impact\ImpactController@index');
    Route::get('impact/{id}', 'Api\Impact\ImpactController@edit');
    Route::put('impact_update/{id}', 'Api\Impact\ImpactController@update');
    Route::delete('impact_table', 'Api\Impact\ImpactController@destroy_select');

    //priority

    Route::get('priority_table', 'Api\Priority\PriorityController@getTable');
    Route::delete('priority_table/{id}', 'Api\Priority\PriorityController@destroy');
    Route::post('priority', 'Api\Priority\PriorityController@store');
    Route::get('querypriority', 'Api\Priority\PriorityController@index');
    Route::get('priority/{id}', 'Api\Priority\PriorityController@edit');
    Route::put('priority_update/{id}', 'Api\Priority\PriorityController@update');
    Route::delete('priority_table', 'Api\Priority\PriorityController@destroy_select');

  Route::middleware('auth:api')->get('/user', function (Request $request) {
      return $request->user();
  });
