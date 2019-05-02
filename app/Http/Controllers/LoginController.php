<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
{


  public function Loginprocess(Request $request)
  {


    $validatedData = $request->validate([
      'name' => 'required',

      'password' => 'required',
    ]);
    //input form
    $name = $request->input('name');
    $password = $request->input('password');
    //User database


    $passworddatabase = User::where('name', $name)->value('password');
    // //
    $userdatabase = User::where('name', $name)
                          ->join('permission', 'users.permission_id', '=', 'permission.id')
                          ->get();

    // $userdatabase = User::table('users')
    //         ->join('permission', 'users.id', '=', 'permission.user_id')
    //         ->select('users.*', 'permission.permission_name')
    //         ->where('users.name',$name)
    //         ->get();

    // $userdatabase = User::where('name', $name)
    //
    //                     ->withCount(['permission' => function ($query) {
    //                       $query->where('created_by', 'third');
    //                     }])
    //                     ->get();
                          //
                          // $userdatabase = User::where('name', $name)
                          //
                          //                     ->with(['permission'])
                          //                     ->get();

                                            // $userdatabase = User::where('name', $name)
                                            //                       ->with('permission')->first();
                                                                  //
                                                                  // $userdatabase = User::with(['permission' => function ($query) {
                                                                  //   $query->where('name', $name);
                                                                  // }])->get();







    //check rule

     //:users   check in model Users
     $rules = ['name' => 'unique:users,name'];
     $input = ['name' => $name];
     $passwordhash = Hash::make($password);



// Validator check in model myself
     $validator = Validator::make($input, $rules);

if ($validator->fails()) {

    // $checkpassword = Hash::check($password, $passworddatabase);

      if($password == $passworddatabase){

        return $userdatabase->tojson();



      }else{
        return response()->json('password wrong');


      }




        return response()->json($passworddatabase);
    }else{

              return response()->json('not found name');
    }




 }
}
