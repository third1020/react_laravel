<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Problems extends Model
{
  use SoftDeletes;
  protected $fillable = ['problems_tital',
                         'problems_detail',
                         'problems_status',
                         'equipment_id',
                         'contact_id',
                         'impact_id',
                         'priority_id'

                       ];
}
