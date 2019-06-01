<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'message_title',
                         'message_message',
                         'message_from',
                         'message_to',
                         'status',
                         'created_by'


                       ];
}
