<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewsType extends Model
{
    use SoftDeletes;

    protected $fillable = ['remark',
                         'type_name',
                         'created_by',
                       ];
}
