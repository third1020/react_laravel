<?php

 namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

   public function index()
   {

   }
   //
   //
   // public function create()
   // {
   //
   // }


   public function store(Request $request)
   {


     $validatedData = $request->validate([
       'username' => 'required',
       'password' => 'required',
       'Name_lastname' => 'required',
       'ID_Card' => 'required',
       'Phone_Number' => 'required',
       'Email' => 'required',
       'permission' => 'required'
     ]);


     $user = User::create([

       'name' => $request->username,
       'password' => $request->password,
       'nameuser' => $request->Name_lastname,
       'id_card' => $request->ID_Card,
       'phone_number' => $request->Phone_Number,
       'email' => $request->Email,
       'permission_id' => $request->permission,
     ]);



     return response()->json('User created!');

   }


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
