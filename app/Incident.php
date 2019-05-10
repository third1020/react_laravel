<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Incident extends Model
{
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
