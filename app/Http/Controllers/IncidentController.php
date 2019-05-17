<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\IncidentResource;
use App\Incident;
use Illuminate\Support\Facades\DB;

class IncidentController extends Controller
{
  protected $list;



  public function __construct(Incident $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('incidents')->get();

    return $getdata->toJson();


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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'incident_tital' => 'required',
     'incident_detail' => 'required',
     'incident_status' => 'required',
     'equipment_id' => 'required',
     'contact_id' => 'required',
     'impact_id' => 'required',
     'priority_id' => 'required',

   ]);

   Incident::create([

     'incident_tital' => $validatedData['incident_tital'],
     'incident_detail' => $validatedData['incident_detail'],
     'incident_status' => $validatedData['incident_status'],
     'equipment_id' => $validatedData['equipment_id'],
     'contact_id' => $validatedData['contact_id'],
     'impact_id' => $validatedData['impact_id'],
     'priority_id' => $validatedData['priority_id'],

   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('incidents')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'incident_tital' => 'required',
     'incident_detail' => 'required',
     'incident_status' => 'required',
     'equipment_id' => 'required',
     'contact_id' => 'required',
     'impact_id' => 'required',
     'priority_id' => 'required',
   ]);


        Incident::findOrFail($id)
            ->update([
              'incident_tital' => $validatedData['incident_tital'],
              'incident_detail' => $validatedData['incident_detail'],
              'incident_status' => $validatedData['incident_status'],
              'equipment_id' => $validatedData['equipment_id'],
              'contact_id' => $validatedData['contact_id'],
              'impact_id' => $validatedData['impact_id'],
              'priority_id' => $validatedData['priority_id'],
          ]);





}


 public function destroy($id) {
  Incident::findOrFail($id)->delete();

}
}
