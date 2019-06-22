<?php

namespace App\Http\Controllers\Api\Equipment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimEquipmentModel;
use Illuminate\Support\Facades\DB;

class EquipmentController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_equipment')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'location_id' => 'required',
     'name' => 'required',
   ]);

      $datainsert = DimEquipmentModel::create([
     'client_id' => $validatedData['client_id'],
     'location_id' => $validatedData['location_id'],
     'name' => $validatedData['name'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimEquipmentModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'location_id' => 'required',
        'name' => 'required',
   ]);

      $user = DimEquipmentModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'location_id' => $validatedData['location_id'],
        'name' => $validatedData['name'],

   ]);
  }


  public function destroy($id)
  {
        DimEquipmentModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimEquipmentModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
