<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PriorityResource;
use App\Priority;
use Illuminate\Support\Facades\DB;

class PriorityController extends Controller
{
  protected $list;



  public function __construct(Priority $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('priorities')->get();

    return $getdata->toJson();


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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'priority_name' => 'required',
     'priority_status' => 'required',


   ]);

   Priority::create([

     'priority_name' => $validatedData['priority_name'],
     'priority_status' => $validatedData['priority_status'],

   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('priorities')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'priority_name' => 'required',
     'priority_status' => 'required',
   ]);


        Priority::findOrFail($id)
            ->update([
              'priority_name' => $validatedData['priority_name'],
              'priority_status' => $validatedData['priority_status'],
          ]);





}


 public function destroy($id) {
  Priority::findOrFail($id)->delete();

}

public function destroy_select(Request $request) {

    Priority::destroy($request->foo);


  return response()->json([
     'data' => 'delect successfully',
   ]);

}
}
