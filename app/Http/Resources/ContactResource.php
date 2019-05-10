<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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
          'contact_name'       =>  $this->contact_name,
          'contact_phone'       =>  $this->contact_phone,
          'contact_email'       =>  $this->contact_email,
          'contact_address'       =>  $this->contact_address,
          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
