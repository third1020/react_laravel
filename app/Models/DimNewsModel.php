<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimNewsModel extends Model
{
    use SoftDeletes;


    protected $table = 'dim_news';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'setting_news_id',
            'name',
            'detail',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function FactNews()
    {
        return $this->hasMany(FactNewsModel::class, 'id', 'news_id');
    }

    public function SettingNews()
    {
        return $this->hasOne(SettingNewsModel::class, 'setting_news_id', 'id');
    }
}
