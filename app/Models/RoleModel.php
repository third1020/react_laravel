<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class RoleModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'role';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['name',
            'guard_name',
    ];

    public function RoleHasPermission()
    {
        return $this->hasMany(RoleHasPermissionModel::class, 'id', 'role_id');
    }
}
