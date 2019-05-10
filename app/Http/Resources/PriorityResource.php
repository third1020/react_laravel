<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PriorityResource extends JsonResource
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
          'priority_name'       =>  $this->priority_name,
          'priority_status'       =>  $this->priority_status,
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
