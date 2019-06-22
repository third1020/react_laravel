<?php

namespace App\Http\Controllers\Api\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimNewsModel;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_news')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'setting_news_id' => 'required',
     'name' => 'required',
     'detail' => 'required',

   ]);

      $datainsert = DimNewsModel::create([
     'client_id' => $validatedData['client_id'],
     'setting_news_id' => $validatedData['setting_news_id'],
     'name' => $validatedData['name'],
     'detail' => $validatedData['detail'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimNewsModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'setting_news_id' => 'required',
        'name' => 'required',
        'detail' => 'required',
   ]);

      $user = DimNewsModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'setting_news_id' => $validatedData['setting_news_id'],
        'name' => $validatedData['name'],
        'detail' => $validatedData['detail'],
   ]);
 }


  public function destroy($id)
  {
        DimNewsModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimNewsModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
