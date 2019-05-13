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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'permission_name' => 'required',
     'manage_user' => 'required',
     'manage_knowledge' => 'required',
     'manage_message' => 'required',
     'manage_equipment' => 'required',
     'manage_requipment' => 'required',
     'manage_problem' => 'required',
     'manage_incident' => 'required',
     'manage_contact' => 'required',
     'manage_impact' => 'required',
     'manage_priority' => 'required',
     'manage_solution' => 'required',
     'Report' => 'required',

   ]);

   Permission::create([

     'permission_name' => $validatedData['permission_name'],
     'manage_user' => $validatedData['manage_user'],
     'manage_knowledge' => $validatedData['manage_knowledge'],
     'manage_message' => $validatedData['manage_message'],
     'manage_equipment' => $validatedData['manage_equipment'],
     'manage_requipment' => $validatedData['manage_requipment'],
     'manage_problem' => $validatedData['manage_problem'],
     'manage_incident' => $validatedData['manage_incident'],
     'manage_contact' => $validatedData['manage_contact'],
     'manage_impact' => $validatedData['manage_impact'],
     'manage_priority' => $validatedData['manage_priority'],
     'manage_solution' => $validatedData['manage_solution'],
     'Report' => $validatedData['Report'],

   ]);
   return response()->json('User created!');

 }

 public function destroy($id) {
  Permission::findOrFail($id)->delete();

}


}
