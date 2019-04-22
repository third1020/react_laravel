<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Permission;
use App\Project;

class PermissionController extends Controller
{

 public function index()
 {

   // $getpermission = DB::table('permission')->select('permission_name')->get();
   $getpermission = DB::table('permission')->get();

   return $getpermission->toJson();




 }

 //
 //
 // public function create()
 // {
 //
 // }
 //
 // /
 // public function store(Request $request)
 // {
 //
 //
 // }
 //
 //
 // public function show(Task $task)
 // {
 //     //
 // }
 //
 // public function edit(Task $task)
 // {
 //     //
 // }
 //
 // public function update(Request $request, Task $task)
 // {
 //     //
 // }
 //
 // public function delete(Task $task)
 // {
 //     //
 // }
}
