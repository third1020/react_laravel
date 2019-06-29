<?php

namespace App\Http\Controllers\Api\Location;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DimLocationModel;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
  public function index()
  {
    $getdata = DB::table('dim_location')->whereNull('deleted_at')->get();
    return $getdata->toJson();
  }

  public function store(Request $request)
  {
      $validatedData = $request->validate([
     'client_id' => 'required',
     'name' => 'required',
     'address_1' => 'required',
     'address_2' => 'required',
     'address_3' => 'required',
     'address_latitude' => 'required',
     'address_longitude' => 'required',
     'address_id' => 'required',
     'image_show' => 'required',
     'image_id' => 'required',

   ]);

      $datainsert = DimLocationModel::create([
     'client_id' => $validatedData['client_id'],
     'name' => $validatedData['name'],
     'address_1' => $validatedData['address_1'],
     'address_2' => $validatedData['address_2'],
     'address_3' => $validatedData['address_3'],
     'address_latitude' => $validatedData['address_latitude'],
     'address_longitude' => $validatedData['address_longitude'],
     'address_id' => $validatedData['address_id'],
     'image_show' => $validatedData['image_show'],
     'image_id' => $validatedData['image_id'],

   ]);

      return response()->json(compact('datainsert'));
  }

  public function edit($id)
  {
      $user = DimLocationModel::findOrFail($id);

      return response()->json([
          'user' => $user,
      ]);
  }

  public function update(Request $request, $id)
  {
      $validatedData = $request->validate([
        'client_id' => 'required',
        'name' => 'required',
        'address_1' => 'required',
        'address_2' => 'required',
        'address_3' => 'required',
        'address_latitude' => 'required',
        'address_longitude' => 'required',
        'address_id' => 'required',

   ]);

      $user = DimLocationModel::where('id',$id)->update([
        'client_id' => $validatedData['client_id'],
        'name' => $validatedData['name'],
        'address_1' => $validatedData['address_1'],
        'address_2' => $validatedData['address_2'],
        'address_3' => $validatedData['address_3'],
        'address_latitude' => $validatedData['address_latitude'],
        'address_longitude' => $validatedData['address_longitude'],
        'address_id' => $validatedData['address_id'],
        
   ]);
 }


  public function destroy($id)
  {
        DimLocationModel::destroy($id);
        return response()->json('delete successfully'.$id);
  }
  public function destroy_select(Request $request)
  {
      DimLocationModel::destroy($request->foo);

      return response()->json([
     'data' => $request->foo,
   ]);
  }
}
