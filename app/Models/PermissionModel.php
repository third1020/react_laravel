<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class PermissionModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'permission';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
            'permission_name',
            'ManageUser',
            'ManageNews',
            'ManageMessage',
            'ManageEquipment',
            'ManageRequipment',
            'ManageProblem',
            'ManageIncident',
            'ManageContact',
            'ManageImpact',
            'ManagePriority',
            'ManageSolution',
            'Report',
    ];

    protected $softDelete = true;


    public function RoleHasPermission()
    {
        return $this->hasMany(RoleHasPermissionModel::class, 'id', 'permission_id');
    }
}
