<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News_type extends Model
{
  protected $fillable = ['remark',
                         'type_name',
                         'created_by'

                       ];
}
