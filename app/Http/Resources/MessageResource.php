<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
          'id'                  =>  $this->id ,
          'message_title'       =>  $this->message_title,
          'message_from'        =>  $this->message_from,
          'message_to'          =>  $this->message_to,
          'status'              =>  $this->status,

          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
