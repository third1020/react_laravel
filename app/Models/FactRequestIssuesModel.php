<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class FactRequestIssuesModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_request_general';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'request_issues_id',
            'equipment_id',
            'name',
            'comment',
            'issues_level',
            'request_sort',
            'modify_id',
            'modify_status',
            'impact_id',
            'priority_id',
        ];

    public function DimRequestIssues()
    {
        return $this->hasOne(DimRequestGeneralModel::class, 'request_issues_id', 'id');
    }

    public function DimEquipment()
    {
        return $this->hasOne(DimEquipmentModel::class, 'equipment_id', 'id');
    }

    public function FactEquipment()
    {
        return $this->hasOne(FactEquipmentModel::class, 'equipment_id', 'equipment_id');
    }

    public function Modify()
    {
        return $this->hasOne(FactEquipmentModel::class, 'modify_id', 'id');
    }

    public function Impact()
    {
        return $this->hasOne(FactEquipmentModel::class, 'impact_id', 'id');
    }

    public function Priority()
    {
        return $this->hasOne(FactEquipmentModel::class, 'priority_id', 'id');
    }
}
