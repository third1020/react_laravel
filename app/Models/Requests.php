<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Requests extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'request_tital',
                         'request_detail',
                         'request_status',
                         'equipment_id'

                       ];
}
