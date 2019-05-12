<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use App\Permission;
use Illuminate\Http\Request;



class PermissionController extends Controller
{

  protected $permission;



  public function __construct(Permission $permission)
  {
      $this->permission = $permission;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                      $query = $this->permission->orderBy($request->column, $request->order);




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
