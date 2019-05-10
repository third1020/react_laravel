<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProblemsResource extends JsonResource
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
          'problems_tital'       =>  $this->problems_tital,
          'problems_status'       =>  $this->problems_status,
        
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
