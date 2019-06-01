<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ImpactResource;
use App\Impact;
use Illuminate\Support\Facades\DB;

class ImpactController extends Controller
{
  protected $list;



  public function __construct(Impact $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('impacts')->get();

    return $getdata->toJson();


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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'impact_name' => 'required',
     'impact_value' => 'required',


   ]);

   Impact::create([

     'impact_name' => $validatedData['impact_name'],
     'impact_value' => $validatedData['impact_value'],


   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('impacts')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'impact_name' => 'required',
     'impact_value' => 'required',

   ]);


        Impact::findOrFail($id)
            ->update([
              'impact_name' => $validatedData['impact_name'],
              'impact_value' => $validatedData['impact_value'],
          ]);





}


 public function destroy($id) {
  Impact::findOrFail($id)->delete();

}

public function destroy_select(Request $request) {

    Impact::destroy($request->foo);


  return response()->json([
     'data' => 'delect successfully',
   ]);

}
}
