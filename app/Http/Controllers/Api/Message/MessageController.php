<?php

namespace App\Http\Controllers\Api\Message;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimMessageModel;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_message')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'tital' => 'required',
     'detail' => 'required',
     'status' => 'required',

   ]);

      $datainsert = DimMessageModel::create([
     'client_id' => $validatedData['client_id'],
     'tital' => $validatedData['tital'],
     'detail' => $validatedData['detail'],
     'status' => $validatedData['status'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimMessageModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'tital' => 'required',
        'detail' => 'required',
        'status' => 'required',
   ]);

      $user = DimMessageModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'tital' => $validatedData['tital'],
        'detail' => $validatedData['detail'],
        'status' => $validatedData['status'],
   ]);
 }


  public function destroy($id)
  {
        DimMessageModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimMessageModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
