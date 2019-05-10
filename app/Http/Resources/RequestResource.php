<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RequestResource extends JsonResource
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
          'request_tital'       =>  $this->request_tital,
          'request_status'       =>  $this->request_status,
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
