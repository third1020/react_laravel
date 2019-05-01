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
  /**
   * @var User
   */
  protected $user;

  /**
   * UsersController constructor.
   *
   * @param User $user
   */
  public function __construct(User $user)
  {
      $this->user = $user;
  }

  /**
   * List of users in Json format
   *
   * @param Request $request
   * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
   */

   public function index(Request $request)
   {
     $query = $this->user->orderBy($request->column, $request->order);
           $users = $query->paginate($request->per_page ?? 5);

           return UsersResource::collection($users);

   }



   public function store(Request $request)
   {


     $validatedData = $request->validate([
       'username' => 'required',
       'password' => 'required',
       'Name_lastname' => 'required',
       'ID_Card' => 'required',
       'Phone_Number' => 'required',
       'Email' => 'required',
       'permission' => 'required',



     ]);



    $file = $request->file('image');
    $file = $request->image;
    $imageencode = $file;

    $passwordhash = Hash::make($request->password);




     $user = User::create([

       'name' => $request->username,
       'password' => $passwordhash,
       'nameuser' => $request->Name_lastname,
       'id_card' => $request->ID_Card,
       'phone_number' => $request->Phone_Number,
       'email' => $request->Email,
       'permission_id' => $request->permission,
       'image' => $imageencode


     ]);





     return response()->json('User created!');

   }


   // public function show(Task $task)
   // {
   //     //
   // }
   //
   public function edit($id)
   {
     $user = User::findOrFail($id);
 		return response()->json([
 			'user' => $user,
 		]);
   }


   public function update(Request $request, $id) {
 		// update task
 		$input = $request->all();
 		$task = Task::findOrFail($id);
 		$task->update($input);
 		return response()->json($task->with('user')->find($task->id));
 	}


  public function destroy($id) {
		User::findOrFail($id)->delete();

	}

}
