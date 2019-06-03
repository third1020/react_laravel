<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimRequestIssuesModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_request_issues';
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

    public function FactRequestIssues()
    {
        return $this->hasMany(FactRequestIssues::class, 'id', 'request_issues_id');
    }
}
