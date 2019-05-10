<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Priority extends Model
{
  protected $fillable = ['remark',
                         'priority_name',
                         'priority_status',


                       ];
}
