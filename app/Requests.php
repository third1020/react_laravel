<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
  protected $fillable = ['remark',
                         'request_tital',
                         'request_detail',
                         'request_status',
                         'equipment_id'

                       ];
}
