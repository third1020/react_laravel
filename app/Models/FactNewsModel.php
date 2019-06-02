<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class FactNewsModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'fact_news';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'news_id',
            'comment',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function DimNews()
    {
        return $this->hasOne(DimPersonContactModel::class, 'news_id', 'id');
    }
}
