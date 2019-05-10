<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class EquipmentResource extends JsonResource
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
          'equipment_name'       =>  $this->equipment_name,
          'equipment_number'       =>  $this->equipment_number,
          'contact_detail'       =>  $this->contact_detail,
      
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
