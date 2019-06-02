<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
        'password' => 'required',
        ]);

        $credentials = ['email' => $request->email, 'password' => $password];

        if (Auth::attempt($crendentials, $request->remember)) {
            //login successful, redirect the user to your preferred url/route...
        }
        // Validator check in model myself
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $checkpassword = Hash::check($password, $passworddatabase);

            if ($checkpassword) {
                return $userdatabase->tojson();
            } else {
                return response()->json([
                    'error' => '01',
                    'message' => 'password wrong',
                ], 201);
            }
        } else {
            return response()->json([
                'error' => '02',
                'message' => 'not found name',
            ], 201);
        }
    }
}
