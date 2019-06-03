<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class RoleHasPermissionModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'role_has_permission';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['permission_id',
            'role_id',
    ];

    public function Permission()
    {
        return $this->hasOne(PermissionModel::class, 'permission_id', 'id');
    }

    public function Role()
    {
        return $this->hasOne(RoleModel::class, 'role_id', 'id');
    }
}
