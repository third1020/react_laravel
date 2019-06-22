<?php

namespace App\Http\Controllers\Api\Request;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimRequestIssuesModel;
use Illuminate\Support\Facades\DB;


class RequestIssues extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_request_issues')->whereNull('deleted_at')->get();
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
     'audit_timestamp' => 'required',
     'approval_timestamp' => 'required',
     'auditor_user_id' => 'required',
     'auditor_user_id' => 'required',


   ]);

      $datainsert = DimRequestIssuesModel::create([
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
      $user = DimRequestIssuesModel::findOrFail($id);

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
        'approval_timestamp' => 'required',
        'auditor_user_id' => 'required',
        'auditor_user_id' => 'required',
   ]);

      $user = DimRequestIssuesModel::where('id',$id)->update([

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
        DimRequestIssuesModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimRequestIssuesModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
