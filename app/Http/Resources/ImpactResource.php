<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ImpactResource extends JsonResource
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
          'impact_name'       =>  $this->impact_name,
          'impact_value'       =>  $this->impact_value,
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
