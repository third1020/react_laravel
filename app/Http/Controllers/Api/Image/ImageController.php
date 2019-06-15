<?php

namespace App\Http\Controllers\Api\Image;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\DimImageModel;
use Illuminate\Support\Facades\DB;
class ImageController extends Controller
{
    public function getImage(){

    }

    public function uploadImage(Request $request){
      // $path = $request->file('image')->store('image_froala_editor', 'public');
      $file_data = $request->get('image');

      if($file_data!=""){
         $file_name = 'image_'.time().'.jpg';
          $path =   Storage::disk('public')->put($file_name,base64_decode($file_data));


          $image_id =  DB::table('dim_image')->insertGetId([
         'client_id' => $request->client_id,
         'image' => $file_name

       ]);


          return response()->json(['image_id' => $image_id]);




        }else{
          $path = Storage::disk('public')->put('Froala_editor', $request->file('file'));
          // $path = Storage::disk('local')->put('file.txt', 'Contents');

          $url = Storage::url($path);

          return response()->json(['link' => $url]);
        }



    }

}
