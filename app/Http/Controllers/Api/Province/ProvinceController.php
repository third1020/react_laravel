<?php

namespace App\Http\Controllers\Api\Province;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProvinceModel;
use Illuminate\Support\Facades\DB;


class ProvinceController extends Controller
{
  public function index()
  {
    $getdata = DB::table('province')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'name' => 'required',

   ]);

      $datainsert = ProvinceModel::create([
     'name' => $validatedData['name'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = ProvinceModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'name' => 'required',

   ]);

      $user = ProvinceModel::where('id',$id)->update([

        'name' => $validatedData['name'],


   ]);
 }


  public function destroy($id)
  {
        ProvinceModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      ProvinceModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
