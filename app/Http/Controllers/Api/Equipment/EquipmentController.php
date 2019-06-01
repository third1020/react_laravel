<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EquipmentResource;
use App\Equipment;
use Illuminate\Support\Facades\DB;

class EquipmentController extends Controller
{
  protected $list;



  public function __construct(Equipment $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('equipment')->get();

    return $getdata->toJson();


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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'equipment_name' => 'required',
     'equipment_detail' => 'required',
     'equipment_number' => 'required',
     'contact_detail' => 'required',
     'equipment_type_id' => 'required',
     'equipment_image' => 'required',

   ]);

   Equipment::create([

     'equipment_name' => $validatedData['equipment_name'],
     'equipment_detail' => $validatedData['equipment_detail'],
     'equipment_number' => $validatedData['equipment_number'],
     'contact_detail' => $validatedData['contact_detail'],
     'equipment_type_id' => $validatedData['equipment_type_id'],
     'equipment_image' => $validatedData['equipment_image'],

   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('equipment')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'equipment_name' => 'required',
     'equipment_detail' => 'required',
     'equipment_number' => 'required',
     'contact_detail' => 'required',
     'equipment_type_id' => 'required',
     'equipment_image' => 'required',
   ]);


        Equipment::findOrFail($id)
            ->update([
              'equipment_name' => $validatedData['equipment_name'],
              'equipment_detail' => $validatedData['equipment_detail'],
              'equipment_number' => $validatedData['equipment_number'],
              'contact_detail' => $validatedData['contact_detail'],
              'equipment_type_id' => $validatedData['equipment_type_id'],
              'equipment_image' => $validatedData['equipment_image'],
          ]);





}


 public function destroy($id) {
  Equipment::findOrFail($id)->delete();

}

public function destroy_select(Request $request) {

    Equipment::destroy($request->foo);


  return response()->json([
     'data' => 'delect successfully',
   ]);

}
}
