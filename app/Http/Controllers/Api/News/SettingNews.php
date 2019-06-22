<?php

namespace App\Http\Controllers\Api\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SettingNewsModel;
use Illuminate\Support\Facades\DB;

class SettingNews extends Controller
{
  public function index()
  {
    $getdata = DB::table('setting_news')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'is_close' => 'required',

   ]);

      $datainsert = SettingNewsModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'is_close' => $validatedData['is_close'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = SettingNewsModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'is_close' => 'required',
   ]);

      $user = SettingNewsModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],
        'is_close' => $validatedData['is_close'],
   ]);
 }


  public function destroy($id)
  {
        SettingNewsModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      SettingNewsModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
