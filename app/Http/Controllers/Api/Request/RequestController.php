<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RequestResource;

use App\Requests;
use Illuminate\Support\Facades\DB;

class RequestController extends Controller
{
  protected $list;



  public function __construct(Requests $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('requests')->get();

    return $getdata->toJson();


  }

  public function getTable(Request $request)
  {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('request_tital','like',$wordsearch)
                                                 ->orwhere('request_status','like',$wordsearch)

                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return RequestResource::collection($list);

  }

  public function store(Request $request)
  {

    $validatedData = $request->validate([
      'request_tital' => 'required',
      'request_detail' => 'required',
      'request_status' => '',

      'equipment_id' => 'required',

    ]);

    Requests::create([

      'request_tital' => $validatedData['request_tital'],
      'request_detail' => $validatedData['request_detail'],
      'request_status' => "1",
      'equipment_id' => $validatedData['equipment_id'],


    ]);
    return response()->json('User created!');

  }

  public function edit($id)
  {
    $listdata = DB::table('requests')->where('id',$id)->get();

    return $listdata->toJson();
  }


  public function update(Request $request, $id) {


    $validatedData = $request->validate([
      'request_tital' => 'required',
      'request_detail' => 'required',
      'request_status' => '',
      'equipment_id' => 'required',
    ]);


         Requests::findOrFail($id)
             ->update([
               'request_tital' => $validatedData['request_tital'],
               'request_detail' => $validatedData['request_detail'],
               'request_status' => "1",
               'equipment_id' => $validatedData['equipment_id'],
           ]);





 }


  public function destroy($id) {
  Requests::findOrFail($id)->delete();

  }

  public function destroy_select(Request $request) {

      Requests::destroy($request->foo);


    return response()->json([
       'data' => 'delect successfully',
     ]);

  }
}
