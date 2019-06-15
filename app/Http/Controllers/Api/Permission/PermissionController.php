<?php

namespace App\Http\Controllers\Api\Permission;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\PermissionModel;
use Illuminate\Http\Request;

class PermissionController extends Controller
{



  public function index()
  {
      $getpermission = DB::table('permission')->select('id', 'permission_name')->get();

      return response()->json(compact('getpermission'));
  }
    public function getPermission(Request $request)
    {
        $getpermission = DB::table('permission')->where('id',$request->permission_id)->first();

        return response()->json(compact('getpermission'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'permission_name' => 'required|unique:permission|max:255',
          'ManageUser' => 'required|boolean',
          'ManageNews' => 'required|boolean',
          'ManageMessage' => 'required|boolean',
          'ManageEquipment' => 'required|boolean',
          'ManageRequipment' => 'required|boolean',
          'ManageProblem' => 'required|boolean',
          'ManageIncident' => 'required|boolean',
          'ManageContact' => 'required|boolean',
          'ManageImpact' => 'required|boolean',
          'ManagePriority' => 'required|boolean',
          'ManageSolution' => 'required|boolean',
          'Report' => 'required|boolean'

   ]);

        PermissionModel::create([
     'permission_name' => $validatedData['permission_name'],
     'ManageUser' => $validatedData['ManageUser'],
     'ManageNews' => $validatedData['ManageNews'],
     'ManageMessage' => $validatedData['ManageMessage'],
     'ManageEquipment' => $validatedData['ManageEquipment'],
     'ManageRequipment' => $validatedData['ManageRequipment'],
     'ManageProblem' => $validatedData['ManageProblem'],
     'ManageIncident' => $validatedData['ManageIncident'],
     'ManageContact' => $validatedData['ManageContact'],
     'ManageImpact' => $validatedData['ManageImpact'],
     'ManagePriority' => $validatedData['ManagePriority'],
     'ManageSolution' => $validatedData['ManageSolution'],
     'Report' => $validatedData['Report'],
   ]);
    }

    public function edit($id)
    {
        $listdata = DB::table('permission')->whereNull('deleted_at')->orWhere('id', $id)->get();

        return $listdata->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
     'permission_name' => 'required|max:255',
     'ManageUser' => 'required|boolean',
     'ManageNews' => 'required|boolean',
     'ManageMessage' => 'required|boolean',
     'ManageEquipment' => 'required|boolean',
     'ManageRequipment' => 'required|boolean',
     'ManageProblem' => 'required|boolean',
     'ManageIncident' => 'required|boolean',
     'ManageContact' => 'required|boolean',
     'ManageImpact' => 'required|boolean',
     'ManagePriority' => 'required|boolean',
     'ManageSolution' => 'required|boolean',
     'Report' => 'required|boolean',
   ]);

        PermissionModel::findOrFail($id)
            ->update([
              'permission_name' => $validatedData['permission_name'],
              'ManageUser' => $validatedData['ManageUser'],
              'ManageNews' => $validatedData['ManageNews'],
              'ManageMessage' => $validatedData['ManageMessage'],
              'ManageEquipment' => $validatedData['ManageEquipment'],
              'ManageRequipment' => $validatedData['ManageRequipment'],
              'ManageProblem' => $validatedData['ManageProblem'],
              'ManageIncident' => $validatedData['ManageIncident'],
              'ManageContact' => $validatedData['ManageContact'],
              'ManageImpact' => $validatedData['ManageImpact'],
              'ManagePriority' => $validatedData['ManagePriority'],
              'ManageSolution' => $validatedData['ManageSolution'],
              'Report' => $validatedData['Report'],
          ]);
    }

    public function destroy($id)
    {
      PermissionModel::destroy($id);
      return response()->json('delete successfully'.$id);
    }

    public function destroy_select(Request $request)
    {
      PermissionModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
