<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  protected $fillable = ['remark',
                         'message_title',
                         'message_message',
                         'message_from',
                         'message_to',
                         'status',
                         'created_by'


                       ];
}
