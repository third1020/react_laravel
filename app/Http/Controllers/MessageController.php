<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\MessageResource;
use App\Message;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
  protected $list;



  public function __construct(Message $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('messages')->get();

    return $getdata->toJson();


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('message_title','like',$wordsearch)
                                                 ->orwhere('message_from','like',$wordsearch)
                                                 ->orwhere('message_to','like',$wordsearch)
                                                 ->orwhere('status','like',$wordsearch)
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return MessageResource::collection($list);

 }

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'message_title' => 'required',
     'message_message' => 'required',
     'message_from' => 'required',
     'message_to' => 'required',



   ]);

   Message::create([

     'message_title' => $validatedData['message_title'],
     'message_message' => $validatedData['message_message'],
     'message_from' => $validatedData['message_from'],
     'message_to' => $validatedData['message_to'],
     'status' => "0",


   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('messages')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'message_title' => 'required',
     'message_message' => 'required',
     'message_from' => 'required',
     'message_to' => 'required',
   ]);


        Message::findOrFail($id)
            ->update([
              'message_title' => $validatedData['message_title'],
              'message_message' => $validatedData['message_message'],
              'message_from' => $validatedData['message_from'],
              'message_to' => $validatedData['message_to'],
              'status' => "0",
          ]);





}


 public function destroy($id) {
  Message::findOrFail($id)->delete();

}
}
