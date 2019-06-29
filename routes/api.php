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
  Route::post('/uploadImage', 'Api\Image\ImageController@uploadImage');
  Route::get('/image/index', 'Api\Image\ImageController@index');
  Route::delete('/image/delete/{id}', 'Api\Image\ImageController@destroy');
  Route::delete('/image/delete_selected', 'Api\Image\ImageController@destroy_select');

//permissionu

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

//CompanyController
  Route::get('/company/index', 'Api\Company\CompanyController@index');
  Route::post('/company/store', 'Api\Company\CompanyController@store');
  Route::get('/company/update/{id}', 'Api\Company\CompanyController@edit');
  Route::put('/company/update/{id}', 'Api\Company\CompanyController@update');
  Route::delete('/company/delete/{id}', 'Api\Company\CompanyController@destroy');
  Route::delete('/company/delete_selected', 'Api\Company\CompanyController@destroy_select');

//DepartmentController
  Route::get('/department/index', 'Api\Department\DepartmentController@index');
  Route::post('/department/store', 'Api\Department\DepartmentController@store');
  Route::get('/department/update/{id}', 'Api\Department\DepartmentController@edit');
  Route::put('/department/update/{id}', 'Api\Department\DepartmentController@update');
  Route::delete('/department/delete/{id}', 'Api\Department\DepartmentController@destroy');
  Route::delete('/department/delete_selected', 'Api\Department\DepartmentController@destroy_select');
//Incident
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

//LocationController
  Route::get('/location/index', 'Api\Location\LocationController@index');
  Route::post('/location/store', 'Api\Location\LocationController@store');
  Route::get('/location/update/{id}', 'Api\Location\LocationController@edit');
  Route::put('/location/update/{id}', 'Api\Location\LocationController@update');
  Route::delete('/location/delete/{id}', 'Api\Location\LocationController@destroy');
  Route::delete('/location/delete_selected', 'Api\Location\LocationController@destroy_select');


//MessageController
  Route::get('/message/index', 'Api\Message\MessageController@index');
  Route::post('/message/store', 'Api\Message\MessageController@store');
  Route::get('/message/update/{id}', 'Api\Message\MessageController@edit');
  Route::put('/message/update/{id}', 'Api\Message\MessageController@update');
  Route::delete('/message/delete/{id}', 'Api\Message\MessageController@destroy');
  Route::delete('/message/delete_selected', 'Api\Message\MessageController@destroy_select');


//ModifyController
  Route::get('/modify/index', 'Api\Modify\ModifyController@index');
  Route::post('/modify/store', 'Api\Modify\ModifyController@store');
  Route::get('/modify/update/{id}', 'Api\Modify\ModifyController@edit');
  Route::put('/modify/update/{id}', 'Api\Modify\ModifyController@update');
  Route::delete('/modify/delete/{id}', 'Api\Modify\ModifyController@destroy');
  Route::delete('/modify/delete_selected', 'Api\Modify\ModifyController@destroy_select');

//NewsController
  Route::get('/news/index', 'Api\News\NewsController@index');
  Route::post('/news/store', 'Api\News\NewsController@store');
  Route::get('/news/update/{id}', 'Api\News\NewsController@edit');
  Route::put('/news/update/{id}', 'Api\News\NewsController@update');
  Route::delete('/news/delete/{id}', 'Api\News\NewsController@destroy');
  Route::delete('/news/delete_selected', 'Api\News\NewsController@destroy_select');

  //SettingNewsController
    Route::get('/settingnews/index', 'Api\News\SettingNews@index');
    Route::post('/settingnews/store', 'Api\News\SettingNews@store');
    Route::get('/settingnews/update/{id}', 'Api\News\SettingNews@edit');
    Route::put('/settingnews/update/{id}', 'Api\News\SettingNews@update');
    Route::delete('/settingnews/delete/{id}', 'Api\News\SettingNews@destroy');
    Route::delete('/settingnews/delete_selected', 'Api\News\SettingNews@destroy_select');

  //PersonContact
    Route::get('/personcontact/index', 'Api\Person\PersonContact@index');
    Route::post('/personcontact/store', 'Api\Person\PersonContact@store');
    Route::get('/personcontact/update/{id}', 'Api\Person\PersonContact@edit');
    Route::put('/personcontact/update/{id}', 'Api\Person\PersonContact@update');
    Route::delete('/personcontact/delete/{id}', 'Api\Person\PersonContact@destroy');
    Route::delete('/personcontact/delete_selected', 'Api\Person\PersonContact@destroy_select');

//ResponsibleController
    Route::get('/personresponsible/index', 'Api\Person\Responsible@index');
    Route::post('/personresponsible/store', 'Api\Person\Responsible@store');
    Route::get('/personresponsible/update/{id}', 'Api\Person\Responsible@edit');
    Route::put('/personresponsible/update/{id}', 'Api\Person\Responsible@update');
    Route::delete('/personresponsible/delete/{id}', 'Api\Person\Responsible@destroy');
    Route::delete('/personresponsible/delete_selected', 'Api\Person\Responsible@destroy_select');

//PostalCodeController
    Route::get('/postalcode/index', 'Api\PostalCode\PostalCodeController@index');
    Route::post('/postalcode/store', 'Api\PostalCode\PostalCodeController@store');
    Route::get('/postalcode/update/{id}', 'Api\PostalCode\PostalCodeController@edit');
    Route::put('/postalcode/update/{id}', 'Api\PostalCode\PostalCodeController@update');
    Route::delete('/postalcode/delete/{id}', 'Api\PostalCode\PostalCodeController@destroy');
    Route::delete('/postalcode/delete_selected', 'Api\PostalCode\PostalCodeController@destroy_select');

//PriorityController
    Route::get('/priority/index', 'Api\Priority\PriorityController@index');
    Route::post('/priority/store', 'Api\Priority\PriorityController@store');
    Route::get('/priority/update/{id}', 'Api\Priority\PriorityController@edit');
    Route::put('/priority/update/{id}', 'Api\Priority\PriorityController@update');
    Route::delete('/priority/delete/{id}', 'Api\Priority\PriorityController@destroy');
    Route::delete('/priority/delete_selected', 'Api\Priority\PriorityController@destroy_select');

//ProvinceController
    Route::get('/province/index', 'Api\Province\ProvinceController@index');
    Route::post('/province/store', 'Api\Province\ProvinceController@store');
    Route::get('/province/update/{id}', 'Api\Province\ProvinceController@edit');
    Route::put('/province/update/{id}', 'Api\Province\ProvinceController@update');
    Route::delete('/province/delete/{id}', 'Api\Province\ProvinceController@destroy');
    Route::delete('/province/delete_selected', 'Api\Province\ProvinceController@destroy_select');

//RequestController
    Route::get('/requestgeneral/index', 'Api\Request\RequestGeneral@index');
    Route::post('/requestgeneral/store', 'Api\Request\RequestGeneral@store');
    Route::get('/requestgeneral/update/{id}', 'Api\Request\RequestGeneral@edit');
    Route::put('/requestgeneral/update/{id}', 'Api\Request\RequestGeneral@update');
    Route::delete('/requestgeneral/delete/{id}', 'Api\Request\RequestGeneral@destroy');
    Route::delete('/requestgeneral/delete_selected', 'Api\Request\RequestGeneral@destroy_select');

    //RequestController
    Route::get('/requestissues/index', 'Api\Request\RequestIssues@index');
    Route::post('/requestissues/store', 'Api\Request\RequestIssues@store');
    Route::get('/requestissues/update/{id}', 'Api\Request\RequestIssues@edit');
    Route::put('/requestissues/update/{id}', 'Api\Request\RequestIssues@update');
    Route::delete('/requestissues/delete/{id}', 'Api\Request\RequestIssues@destroy');
    Route::delete('/requestissues/delete_selected', 'Api\Request\RequestIssues@destroy_select');

  //SubDistrictController
    Route::get('/district/index', 'Api\District\DistrictController@index');
    Route::post('/district/store', 'Api\District\DistrictController@store');
    Route::get('/district/update/{id}', 'Api\District\DistrictController@edit');
    Route::put('/district/update/{id}', 'Api\District\DistrictController@update');
    Route::delete('/district/delete/{id}', 'Api\District\DistrictController@destroy');
    Route::delete('/district/delete_selected', 'Api\District\DistrictController@destroy_select');

//SubDistrictController
    Route::get('/subdistrict/index', 'Api\SubDistrict\SubDistrictController@index');
    Route::post('/subdistrict/store', 'Api\SubDistrict\SubDistrictController@store');
    Route::get('/subdistrict/update/{id}', 'Api\SubDistrict\SubDistrictController@edit');
    Route::put('/subdistrict/update/{id}', 'Api\SubDistrict\SubDistrictController@update');
    Route::delete('/subdistrict/delete/{id}', 'Api\SubDistrict\SubDistrictController@destroy');
    Route::delete('/subdistrict/delete_selected', 'Api\SubDistrict\SubDistrictController@destroy_select');
