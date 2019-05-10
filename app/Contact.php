<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
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
