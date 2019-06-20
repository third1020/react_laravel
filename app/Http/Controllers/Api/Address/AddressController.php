<?php

namespace App\Http\Controllers\Api\Address;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimAddressModel;
use Illuminate\Support\Facades\DB;

class AddressController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_address')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'province_id' => 'required',
     'district_id' => 'required',
     'sub_district_id' => 'required',
     'postal_code_id' => 'required',

   ]);

      $datainsert = DimAddressModel::create([
     'province_id' => $validatedData['province_id'],
     'district_id' => $validatedData['district_id'],
     'sub_district_id' => $validatedData['sub_district_id'],
     'postal_code_id' => $validatedData['postal_code_id'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimAddressModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'province_id' => 'required',
        'district_id' => 'required',
        'sub_district_id' => 'required',
        'postal_code_id' => 'required',
   ]);

      $user = DimAddressModel::where('id',$id)->update([

        'province_id' => $validatedData['province_id'],
        'district_id' => $validatedData['district_id'],
        'sub_district_id' => $validatedData['sub_district_id'],
        'postal_code_id' => $validatedData['postal_code_id'],


   ]);
 }


  public function destroy($id)
  {
        DimAddressModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimAddressModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
