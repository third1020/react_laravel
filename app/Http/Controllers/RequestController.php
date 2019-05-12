<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RequestResource;

use App\Requests;

class RequestController extends Controller
{
  protected $list;



  public function __construct(Requests $list)
  {
      $this->list = $list;


  }

  public function getTable(Request $request)
  {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('request_tital','like',$wordsearch)
                                                 ->orwhere('request_status','like',$wordsearch)

                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return RequestResource::collection($list);

  }


  public function destroy($id) {
  Requests::findOrFail($id)->delete();

  }
}
