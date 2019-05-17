<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

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

      $getmessage_from = DB::table('users')->where('id',$this->message_from)->get();
      $getmessage_to = DB::table('users')->where('id',$this->message_to)->get();


      return [
          'id'                  =>  $this->id ,
          'message_title'       =>  $this->message_title,
          'message_from'        =>  $getmessage_from[0]->name,
          'message_to'          =>  $getmessage_to[0]->name,
          'status'              =>  $this->status,

          'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
      ];
    }
}
