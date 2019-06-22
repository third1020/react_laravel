<?php

namespace App\Http\Controllers\Api\Person;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimPersonResponsibleModel;
use Illuminate\Support\Facades\DB;


class Responsible extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_person_responsible')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'first_name' => 'required',
     'last_name' => 'required',
     'nick_name' => 'required',
     'telephone' => 'required',
     'email' => 'required',
     'position' => 'required',
     'id_card' => 'required',
     'id_employee' => 'required',
     'location_id' => 'required',
     'company_id' => 'required',
     'department_id' => 'required',

   ]);

      $datainsert = DimPersonResponsibleModel::create([
     'client_id' => $validatedData['client_id'],
     'first_name' => $validatedData['first_name'],
     'last_name' => $validatedData['last_name'],
     'nick_name' => $validatedData['nick_name'],
     'telephone' => $validatedData['telephone'],
     'email' => $validatedData['email'],
     'position' => $validatedData['position'],
     'id_card' => $validatedData['id_card'],
     'id_employee' => $validatedData['id_employee'],
     'district_id' => $validatedData['district_id'],
     'location_id' => $validatedData['location_id'],
     'company_id' => $validatedData['company_id'],
     'department_id' => $validatedData['department_id'],


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimPersonResponsibleModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'first_name' => 'required',
        'last_name' => 'required',
        'nick_name' => 'required',
        'telephone' => 'required',
        'email' => 'required',
        'position' => 'required',
        'id_card' => 'required',
        'id_employee' => 'required',
        'location_id' => 'required',
        'company_id' => 'required',
        'department_id' => 'required',
   ]);

      $user = DimPersonResponsibleModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'first_name' => $validatedData['first_name'],
        'last_name' => $validatedData['last_name'],
        'nick_name' => $validatedData['nick_name'],
        'telephone' => $validatedData['telephone'],
        'email' => $validatedData['email'],
        'position' => $validatedData['position'],
        'id_card' => $validatedData['id_card'],
        'id_employee' => $validatedData['id_employee'],
        'district_id' => $validatedData['district_id'],
        'location_id' => $validatedData['location_id'],
        'company_id' => $validatedData['company_id'],
        'department_id' => $validatedData['department_id'],
   ]);
 }


  public function destroy($id)
  {
        DimPersonResponsibleModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimPersonResponsibleModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
