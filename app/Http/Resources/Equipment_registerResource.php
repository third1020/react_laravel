<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class Equipment_registerResource extends JsonResource
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
          'id'                   =>  $this->id ,
          'equipment_name'       =>  $this->equipment_name,
          'equipment_type'       =>  $this->equipment_type,
          'username'             =>  $this->username,
          'department'           =>  $this->department,

          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
