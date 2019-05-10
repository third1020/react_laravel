<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class IncidentResource extends JsonResource
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
          'incident_tital'       =>  $this->incident_tital,
          'incident_detail'       =>  $this->incident_detail,
          'incident_status'       =>  $this->incident_status,

          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
