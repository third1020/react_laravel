<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ImpactResource;
use App\Impact;

class ImpactController extends Controller
{
  protected $list;



  public function __construct(Impact $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('impact_name','like',$wordsearch)
                                                 ->orwhere('impact_value','like',$wordsearch)
                                              
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return ImpactResource::collection($list);

 }


 public function destroy($id) {
  Impact::findOrFail($id)->delete();

}
}
