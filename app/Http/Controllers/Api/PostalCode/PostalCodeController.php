<?php

namespace App\Http\Controllers\Api\PostalCode;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PostalCodeModel;
use Illuminate\Support\Facades\DB;


class PostalCodeController extends Controller
{
  public function index()
  {
    $getdata = DB::table('postal_code')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'code' => 'required',
     'sub_district_id' => 'required',
     'district_id' => 'required',
     'province_id' => 'required',

   ]);

      $datainsert = PostalCodeModel::create([
     'code' => $validatedData['code'],
     'sub_district_id' => $validatedData['sub_district_id'],
     'district_id' => $validatedData['district_id'],
     'province_id' => $validatedData['province_id'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = PostalCodeModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'code' => 'required',
        'sub_district_id' => 'required',
        'district_id' => 'required',
        'province_id' => 'required',
   ]);

      $user = PostalCodeModel::where('id',$id)->update([

        'code' => $validatedData['code'],
        'sub_district_id' => $validatedData['sub_district_id'],
        'district_id' => $validatedData['district_id'],
        'province_id' => $validatedData['province_id'],


   ]);
 }


  public function destroy($id)
  {
        PostalCodeModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      PostalCodeModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
