<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{

   public function index()
   {

   }


   public function create()
   {

   }

   /
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

     $insertdata = User::create([
       'name' => $validatedData['username'],
       'password' => $validatedData['password'],
       'nameuser' => $validatedData['Name_lastname'],
       'id_card' => $validatedData['ID_Card'],
       'phone_number' => $validatedData['Phone_Number'],
       'email' => $validatedData['Email'],
       'permission_id' => $validatedData['permission'],
     ]);

     return response()->json('User created!');

   }


   public function show(Task $task)
   {
       //
   }

   public function edit(Task $task)
   {
       //
   }

   public function update(Request $request, Task $task)
   {
       //
   }

   public function delete(Task $task)
   {
       //
   }
}
