<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipment_register extends Model
{
  protected $fillable = ['remark',
                         'equipment_name',
                         'equipment_type',
                         'username',
                         'department',
                         'detail',
                         
                         'created_by'


                       ];
}
