<?php

namespace App\Http\Controllers\Api\Department;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimDepartmentModel;
use Illuminate\Support\Facades\DB;

class DepartmentController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_department')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',

   ]);

      $datainsert = DimDepartmentModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],


   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimDepartmentModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
   ]);

      $user = DimDepartmentModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],


   ]);
 }


  public function destroy($id)
  {
        DimDepartmentModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimDepartmentModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
