<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
      return [
          'id'                    =>  $this->id ,
          'news_title'       =>  $this->news_title,
          'news_types_id'       =>  $this->news_types_id,


          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
