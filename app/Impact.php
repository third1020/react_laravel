<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Impact extends Model
{
  protected $fillable = ['remark',
                         'impact_name',
                         'impact_value',
                         'created_by'


                       ];
}
