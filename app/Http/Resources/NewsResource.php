<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

use Illuminate\Support\Facades\DB;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

      $getdata = DB::table('news_types')->where('id',$this->news_types_id)->get();
      return [
          'id'                    =>  $this->id ,
          'news_title'            =>  $this->news_title,
          'news_type'         =>  $getdata[0]->type_name,


          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
