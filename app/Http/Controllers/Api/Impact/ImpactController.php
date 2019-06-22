<?php

namespace App\Http\Controllers\Api\Impact;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimImpactModel;
use Illuminate\Support\Facades\DB;

class ImpactController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_impact')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'value' => 'required',

   ]);

      $datainsert = DimImpactModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'value' => $validatedData['value'],


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimImpactModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'value' => 'required',
   ]);

      $user = DimImpactModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],
        'value' => $validatedData['value'],
   ]);
  }


  public function destroy($id)
  {
        DimImpactModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimImpactModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
