<?php

namespace App\Http\Controllers\Api\District;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DistrictModel;
use Illuminate\Support\Facades\DB;


class DistrictController extends Controller
{
  public function index()
  {
    $getdata = DB::table('district')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'name' => 'required',
     'province_id' => 'required'


   ]);

      $datainsert = DistrictModel::create([
     'name' => $validatedData['name'],
     'province_id' => $validatedData['province_id']


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DistrictModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'name' => 'required',
        'province_id' => 'required'
   ]);

      $user = DistrictModel::where('id',$id)->update([

        'name' => $validatedData['name'],
        'province_id' => $validatedData['province_id']


   ]);
 }


  public function destroy($id)
  {
        DistrictModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DistrictModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
