<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PriorityResource;
use App\Priority;

class PriorityController extends Controller
{
  protected $list;



  public function __construct(Priority $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('priority_name','like',$wordsearch)
                                                 ->orwhere('priority_status','like',$wordsearch)
                                            
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return PriorityResource::collection($list);

 }


 public function destroy($id) {
  Priority::findOrFail($id)->delete();

}
}
