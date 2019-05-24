<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Impact extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'impact_name',
                         'impact_value',
                         'created_by'


                       ];
}
