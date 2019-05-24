<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Incident extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'incident_tital',
                         'incident_detail',
                         'incident_status',
                         'equipment_id',
                         'contact_id',
                         'impact_id',
                         'priority_id',
                         'created_by'

                       ];
}
