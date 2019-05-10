<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\MessageResource;
use App\Message;

class MessageController extends Controller
{
  protected $list;



  public function __construct(Message $list)
  {
      $this->list = $list;


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


 public function destroy($id) {
  Message::findOrFail($id)->delete();

}
}
