<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Priority extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'priority_name',
                         'priority_status',


                       ];
}
