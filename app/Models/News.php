<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
  use SoftDeletes;
  protected $fillable = ['remark',
                         'news_title',
                         'news_detail',
                         'news_types_id',
                         'created_by'

                       ];
}
