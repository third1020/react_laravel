<?php

namespace App\Http\Controllers\Api\SubDistrict;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SubDistrictModel;
use Illuminate\Support\Facades\DB;


class SubDistrictController extends Controller
{
  public function index()
  {
    $getdata = DB::table('sub_district')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'name' => 'required',
     'district_id' => 'required'


   ]);

      $datainsert = SubDistrictModel::create([
     'name' => $validatedData['province_id'],
     'district_id' => $validatedData['district_id']


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = SubDistrictModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'name' => 'required',
        'district_id' => 'required'
   ]);

      $user = SubDistrictModel::where('id',$id)->update([

        'name' => $validatedData['province_id'],
        'district_id' => $validatedData['district_id']


   ]);
 }


  public function destroy($id)
  {
        SubDistrictModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      SubDistrictModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
