<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProblemsResource;
use App\Problems;

class ProblemsController extends Controller
{
  protected $list;



  public function __construct(Problems $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('problems_tital','like',$wordsearch)
                                                 ->orwhere('problems_status','like',$wordsearch)
                                              
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return ProblemsResource::collection($list);

 }


 public function destroy($id) {
  Problems::findOrFail($id)->delete();

}
}
