<?php

namespace App\Http\Controllers\Api\Company;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimCompanyModel;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_company')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'location_id' => 'required',

   ]);

      $datainsert = DimCompanyModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'location_id' => $validatedData['location_id'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimCompanyModel::findOrFail($id);

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

      $user = DimCompanyModel::where('id',$id)->update([

        'province_id' => $validatedData['province_id'],
        'district_id' => $validatedData['district_id'],
        'sub_district_id' => $validatedData['sub_district_id'],
        'postal_code_id' => $validatedData['postal_code_id'],


   ]);
  }


  public function destroy($id)
  {
        DimCompanyModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimCompanyModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
