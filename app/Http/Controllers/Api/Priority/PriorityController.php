<?php

namespace App\Http\Controllers\Api\Priority;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimPriorityModel;
use Illuminate\Support\Facades\DB;


class PriorityController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_priority')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'value' => 'required'

   ]);

      $datainsert = DimPriorityModel::create([
     'client_id' => $validatedData['province_id'],
     'name' => $validatedData['district_id'],
     'value' => $validatedData['sub_district_id']


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimPriorityModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'value' => 'required'
   ]);

      $user = DimPriorityModel::where('id',$id)->update([
        'client_id' => $validatedData['province_id'],
        'name' => $validatedData['district_id'],
        'value' => $validatedData['sub_district_id']
   ]);
 }


  public function destroy($id)
  {
        DimPriorityModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimPriorityModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
