<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class FactUserModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'fact_user';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['user_id',
            'first_name',
            'last_name',
            'nick_name',
            'location_id',
            'telephone',
            'telephone_emergency',
    ];

    public function DimUser()
    {
        return $this->hasOne(DimUserModel::class, 'user_id', 'id');
    }

    public function Location()
    {
        return $this->hasOne(DimLocationModel::class, 'location_id', 'id');
    }
}
