<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Problems extends Model
{
  protected $fillable = ['problems_tital',
                         'problems_detail',
                         'problems_status',
                         'equipment_id',
                         'contact_id',
                         'impact_id',
                         'priority_id'

                       ];
}
