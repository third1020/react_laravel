<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Equipment_register extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'equipment_name',
                         'equipment_type',
                         'username',
                         'department',
                         'detail',

                         'created_by'


                       ];
}
