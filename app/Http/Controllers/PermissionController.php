<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;

use Illuminate\Http\Request;
use App\Permission;


class PermissionController extends Controller
{

  /**
   * @var Permission
   */
  protected $permission;


  /**
   * PermissionsController constructor.
   *
   * @param Permission
   */
  public function __construct(Permission $permission)
  {
      $this->permission = $permission;


  }

  /**
   * List of users in Json format
   *
   * @param Request $request
   * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
   */


 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->permission->where('id','like',$wordsearch)
                                                 ->orwhere('permission_name','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);





         $permission = $query->paginate($request->per_page ?? 5);



         return PermissionResource::collection($permission);

 }

 public function index()
 {


   $getpermission = DB::table('permissions')->get();

   return $getpermission->toJson();


 }

 public function destroy($id) {
  Permission::findOrFail($id)->delete();

}


}
