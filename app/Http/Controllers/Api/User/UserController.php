<?php

namespace App\Http\Controllers\Api\User;

use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;
use App\Models\DimUserModel;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class UserController extends Controller
{




    public function indexretrun()
    {
      $getdata = DB::table('users')->get();

      return $getdata->toJson();

    }

    public function CreateUser(Request $request)
    {
        $validatedData = $request->validate([

       'username' => 'required|string|max:255',
       'password' => 'required|string|min:6',
       'email' => 'required|string|email|max:255|unique:users',
       'image_id' => 'required',
       'client_id' => 'required',
       'permission_id' => 'required',



     ]);



        $passwordhash = Hash::make($validatedData['password']);
        $hashed_email = Hash::make($validatedData['email']);

        $user = DimUserModel::create([
       'client_id' => $validatedData['client_id'],
       'username' => $validatedData['username'],
       'password' => $passwordhash,
       'email' => $validatedData['email'],
       'hashed_email' => $hashed_email,
       'image_id' => $validatedData['image_id'],
       'client_id' => $validatedData['client_id'],
       'permission_id' => $validatedData['permission_id'],

     ]);

     $token = JWTAuth::fromUser($user);

        return response()->json($token);
    }

    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        $checkusername = DB::table('users')->where('username', '=', $request->username)->get();

        if($checkusername !== null){
          $checkpassword = Hash::check($request->password, $checkusername[0]->password);

          if($checkpassword){

            try {
                // attempt to verify the credentials and create a token for the user
                if (! $token = JWTAuth::attempt(['username' => $request->username, 'password' => $request->password,'permission_id' =>$checkusername[0]->permission_id ])) {
                    return response()->json(['error' => 'invalid_credentials'], 401);
                }
            } catch (JWTException $e) {
                // something went wrong whilst attempting to encode the token
                return response()->json(['error' => 'could_not_create_token'], 500);
            }

            // all good so return the token
            return response()->json(compact('token'));

          }
          return response()->json(['error' => 'invalid password']);


        }



    }



    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }


    public function edit($id)
    {
        $user = DimUserModel::findOrFail($id);

        return response()->json([
            'user' => $user,
        ]);
    }

    public function update(Request $request, $id)
    {
        // update task

        $file = $request->file('image');
        $file = $request->image;

        if ($request->password) {
            $validatedData = $request->validate([
            'username' => 'required|max:191',
            'password' => 'required|min:8|max:191',
            'Name_lastname' => 'required',
            'ID_Card' => 'required',
            'Phone_Number' => 'required',
            'Email' => 'required',
            'permission' => 'required',
          ]);
            $passwordhash = Hash::make($request->password);

            DimUserModel::findOrFail($id)
              ->update([
              'name' => $validatedData['username'],
              'password' => $passwordhash,
              'nameuser' => $validatedData['Name_lastname'],
              'id_card' => $validatedData['ID_Card'],
              'phone_number' => $validatedData['Phone_Number'],
              'email' => $validatedData['Email'],
              'permission_id' => $validatedData['permission'],
              'image' => $file,
            ]);
        } else {
            $validatedData = $request->validate([
            'username' => 'required|max:191',
            'Name_lastname' => 'required',
            'ID_Card' => 'required',
            'Phone_Number' => 'required',
            'Email' => 'required',
            'permission' => 'required',
          ]);
            DimUserModel::findOrFail($id)
              ->update([
            'name' => $validatedData['username'],
            'nameuser' => $validatedData['Name_lastname'],
            'id_card' => $validatedData['ID_Card'],
            'phone_number' => $validatedData['Phone_Number'],
            'email' => $validatedData['Email'],
            'permission_id' => $validatedData['permission'],
            'image' => $file,
            ]);
        }
    }

    public function destroy($id)
    {
        // DimUserModel::destroy($id);
        return response()->json($id);
    }

    public function destroy_select(Request $request)
    {
        DimUserModel::destroy($request->foo);

        return response()->json([
       'data' => 'delect successfully',
     ]);
    }
}
