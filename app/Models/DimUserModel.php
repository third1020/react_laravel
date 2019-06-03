<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimUserModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_user';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['client_id',
            'token',
            'email',
            'hashed_email',
            'is_block',
            'user_right',
            'username',
            'image_show',
            'image_id',
            'permission_id',
    ];

    public function FactUser()
    {
        return $this->hasMany(FactUserModel::class, 'id', 'user_id');
    }

    public function Permission()
    {
        return $this->hasOne(PermissionModel::class, 'permission_id', 'id');
    }

    public function DimImage()
    {
        return $this->hasOne(DimImageModel::class, 'image_id', 'id');
    }
}
