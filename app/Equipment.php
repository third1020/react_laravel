<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Equipment extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'equipment_name',
                         'equipment_detail',
                         'equipment_number',
                         'contact_detail',
                         'equipment_type_id',
                         'created_by',
                         'equipment_image'


                       ];
}
