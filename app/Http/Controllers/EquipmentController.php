<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EquipmentResource;
use App\Equipment;

class EquipmentController extends Controller
{
  protected $list;



  public function __construct(Equipment $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('equipment_name','like',$wordsearch)
                                                 ->orwhere('equipment_number','like',$wordsearch)
                                                 ->orwhere('contact_detail','like',$wordsearch)
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return EquipmentResource::collection($list);

 }


 public function destroy($id) {
  Equipment::findOrFail($id)->delete();

}
}
