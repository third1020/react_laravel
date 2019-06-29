<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimEquipmentModel extends Model
{
    use SoftDeletes;


    protected $table = 'dim_equipment';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'location_id',
            'name',
        ];

    public function DimClient()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function FactEquipment()
    {
        return $this->hasMany(FactEquipmentModel::class, 'id', 'equipment_id');
    }

    public function Location()
    {
        return $this->hasOne(DimLocationModel::class, 'location_id', 'id');
    }
}
