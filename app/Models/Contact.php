<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'contact_name',
                         'contact_phone',
                         'contact_email',
                         'contact_address',
                         'contact_detail',
                         'user_id',
                         'created_by'

                       ];
}
