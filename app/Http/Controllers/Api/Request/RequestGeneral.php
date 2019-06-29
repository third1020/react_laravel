<?php

namespace App\Http\Controllers\Api\Request;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimRequestGeneralModel;
use Illuminate\Support\Facades\DB;


class RequestGeneral extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_request_general')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'status' => 'required',
     'auditor_user_id' => 'required',
     'approval_user_id' => 'required',
     'audit_timestamp' => 'required|date',
     'approval_timestamp' => 'required|date'

   ]);

      $datainsert = DimRequestGeneralModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'status' => $validatedData['status'],
     'auditor_user_id' => $validatedData['auditor_user_id'],
     'approval_user_id' => $validatedData['approval_user_id'],
     'audit_timestamp' => $validatedData['audit_timestamp'],
     'approval_timestamp' => $validatedData['approval_timestamp']


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimRequestGeneralModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'status' => 'required',
        'auditor_user_id' => 'required',
        'approval_user_id' => 'required',
        'audit_timestamp' => 'required',
        'approval_timestamp' => 'required'
   ]);

      $user = DimRequestGeneralModel::where('id',$id)->update([

        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],
        'status' => $validatedData['status'],
        'auditor_user_id' => $validatedData['auditor_user_id'],
        'approval_user_id' => $validatedData['approval_user_id'],
        'audit_timestamp' => $validatedData['audit_timestamp'],
        'approval_timestamp' => $validatedData['approval_timestamp']
   ]);
 }


  public function destroy($id)
  {
        DimRequestGeneralModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimRequestGeneralModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
