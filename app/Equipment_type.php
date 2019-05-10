<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipment_type extends Model
{
  protected $fillable = ['remark',
                         'type_name',
                         'created_by'

                       ];
}
