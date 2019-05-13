<?php

 namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

  protected $user;



  public function __construct(User $user)
  {
      $this->user = $user;


  }

  public function index()
  {

    $getdata = DB::table('users')->get();

    return $getdata->toJson();


  }


   public function getTable(Request $request)
   {
     $wordsearch = $request->search.'%';

     // $query = $this->user->orderBy($request->column, $request->order);

                         $query = $this->user->where('id','like',$wordsearch)
                                             ->orwhere('name','like',$wordsearch)
                                             ->orwhere('email','like',$wordsearch)
                                             ->orwhere('nameuser','like',$wordsearch)
                                             ->orwhere('id_card','like',$wordsearch)
                                             ->orwhere('phone_number','like',$wordsearch)
                                             ->orwhere('created_at','like',$wordsearch)
                                             ->orderBy($request->column, $request->order);





           $users = $query->paginate($request->per_page ?? 5);



           return UsersResource::collection($users);

   }





   public function store(Request $request)
   {

     $validatedData = $request->validate([
       'username' => 'required',
       'password' => 'required|min:8',
       'Name_lastname' => 'required',
       'ID_Card' => 'required',
       'Phone_Number' => 'required|min:8',
       'Email' => 'required',
       'permission' => 'required',
       'image' => 'required'

     ]);




    $passwordhash = Hash::make($request->password);

     User::create([

       'name' => $validatedData['username'],
       'password' => $passwordhash,
       'nameuser' => $validatedData['Name_lastname'],
       'id_card' => $validatedData['ID_Card'],
       'phone_number' => $validatedData['Phone_Number'],
       'email' => $validatedData['Email'],
       'permission_id' => $validatedData['permission'],
       'image' => $validatedData['image'],

     ]);
     return response()->json('User created!');

   }

   public function edit($id)
   {
     $user = User::findOrFail($id);
 		return response()->json([
 			'user' => $user,
 		]);
   }


   public function update(Request $request, $id) {
 		// update task

        $file = $request->file('image');
        $file = $request->image;

        if($request->password){
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

          User::findOrFail($id)
              ->update([
              'name' => $validatedData['username'],
              'password' => $passwordhash,
              'nameuser' => $validatedData['Name_lastname'],
              'id_card' => $validatedData['ID_Card'],
              'phone_number' => $validatedData['Phone_Number'],
              'email' => $validatedData['Email'],
              'permission_id' => $validatedData['permission'],
              'image' => $file
            ]);
        }

        else {
          $validatedData = $request->validate([
            'username' => 'required|max:191',
            'Name_lastname' => 'required',
            'ID_Card' => 'required',
            'Phone_Number' => 'required',
            'Email' => 'required',
            'permission' => 'required',
          ]);
            User::findOrFail($id)
              ->update([
            'name' => $validatedData['username'],
            'nameuser' => $validatedData['Name_lastname'],
            'id_card' => $validatedData['ID_Card'],
            'phone_number' => $validatedData['Phone_Number'],
            'email' => $validatedData['Email'],
            'permission_id' => $validatedData['permission'],
            'image' => $file
            ]);
        }


 	}


  public function destroy($id) {
		User::findOrFail($id)->delete();

	}

}
