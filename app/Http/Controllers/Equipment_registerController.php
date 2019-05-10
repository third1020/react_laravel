<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Equipment_registerResource;
use App\Equipment_register;

class Equipment_registerController extends Controller
{
  protected $list;



  public function __construct(Equipment_register $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('equipment_name','like',$wordsearch)
                                                 ->orwhere('equipment_type','like',$wordsearch)
                                                 ->orwhere('username','like',$wordsearch)
                                                 ->orwhere('department','like',$wordsearch)
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return Equipment_registerResource::collection($list);

 }


 public function destroy($id) {
  Equipment_register::findOrFail($id)->delete();

}
}
