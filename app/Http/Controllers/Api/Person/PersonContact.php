<?php

namespace App\Http\Controllers\Api\Person;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimPersonContactModel;
use Illuminate\Support\Facades\DB;


class PersonContact extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_person_contact')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'company_id' => 'required',
     'person_responsible_id' => 'required',

   ]);

      $datainsert = DimPersonContactModel::create([
     'client_id' => $validatedData['client_id'],
     'company_id' => $validatedData['company_id'],
     'person_responsible_id' => $validatedData['person_responsible_id'],


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimPersonContactModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'company_id' => 'required',
        'person_responsible_id' => 'required',
   ]);

      $user = DimPersonContactModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'company_id' => $validatedData['company_id'],
        'person_responsible_id' => $validatedData['person_responsible_id'],
   ]);
 }


  public function destroy($id)
  {
        DimPersonContactModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimPersonContactModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
