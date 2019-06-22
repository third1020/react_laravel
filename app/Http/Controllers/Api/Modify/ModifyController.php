<?php

namespace App\Http\Controllers\Api\Modify;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimModifyModel;
use Illuminate\Support\Facades\DB;

class ModifyController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_modify')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'contact_id' => 'required',

   ]);

      $datainsert = DimModifyModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'contact_id' => $validatedData['contact_id'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimModifyModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'contact_id' => 'required',
   ]);

      $user = DimModifyModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],
        'contact_id' => $validatedData['contact_id'],
   ]);
 }


  public function destroy($id)
  {
        DimModifyModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimModifyModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
