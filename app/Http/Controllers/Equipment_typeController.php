<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Equipment_typeResource;
use App\Equipment_type;

class Equipment_typeController extends Controller
{
  protected $list;



  public function __construct(Equipment_type $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('type_name','like',$wordsearch)
                                              
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return Equipment_typeResource::collection($list);

 }


 public function destroy($id) {
  Equipment_type::findOrFail($id)->delete();

}
}
