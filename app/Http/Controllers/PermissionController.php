<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use App\Permission;
use Illuminate\Http\Request;



class PermissionController extends Controller
{

  protected $list;



  public function __construct(Permission $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('permission_name','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);





         $list = $query->paginate($request->per_page ?? 5);



         return PermissionResource::collection($list);

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
