<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\IncidentResource;
use App\Incident;

class IncidentController extends Controller
{
  protected $list;



  public function __construct(Incident $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('incident_tital','like',$wordsearch)
                                                 ->orwhere('incident_detail','like',$wordsearch)
                                                 ->orwhere('incident_status','like',$wordsearch)
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return IncidentResource::collection($list);

 }


 public function destroy($id) {
  Incident::findOrFail($id)->delete();

}
}
