<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class FactRequestGeneralModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_request_general';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'request_general_id',
            'equipment_id',
            'return_date',
            'receive_date',
            'request_time',
            'request_sort',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function DimRequestGeneral()
    {
        return $this->hasOne(DimRequestGeneralModel::class, 'request_general_id', 'id');
    }

    public function DimEquipment()
    {
        return $this->hasOne(DimEquipmentModel::class, 'equipment_id', 'id');
    }

    public function FactEquipment()
    {
        return $this->hasOne(FactEquipmentModel::class, 'equipment_id', 'equipment_id');
    }
}
