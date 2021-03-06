<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class DimRequestGeneralModel extends Model
{
    use SoftDeletes;


    protected $table = 'dim_request_general';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'name',
            'status',
            'auditor_user_id',
            'approval_user_id',
            'audit_timestamp',
            'approval_timestamp',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function AuditorUser()
    {
        return $this->hasOne(DimUserModel::class, 'auditor_user_id', 'id');
    }

    public function ApprovalUser()
    {
        return $this->hasOne(DimUserModel::class, 'approval_user_id', 'id');
    }

    public function FactRequestGeneral()
    {
        return $this->hasMany(FactRequestGeneralModel::class, 'id', 'request_general_id');
    }
}
