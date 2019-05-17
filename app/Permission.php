<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{

  protected $fillable = ['permission_name',
                         'manage_user',
                         'manage_knowledge',
                         'manage_message',
                         'manage_equipment',
                         'manage_requipment',
                         'manage_problem',
                         'manage_incident',
                         'manage_contact',
                         'manage_impact',
                         'manage_priority',
                         'manage_solution',
                         'Report',
                         'created_by'
                       ];

}
