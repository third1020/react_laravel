<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
  protected $fillable = ['remark',
                         'news_title',
                         'news_detail',
                         'news_types_id',
                         'created_by'

                       ];
}
