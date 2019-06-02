<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class FactEquipmentModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'fact_equipment';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'equipment_id',
            'document_number',
            'name',
            'detail',
            'image_show',
            'image_id',
        ];

    public function DimClient()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function Equipment()
    {
        return $this->hasOne(DimEquipmentModel::class, 'equipment_id', 'id');
    }

    public function DimImage()
    {
        return $this->hasOne(DimImageModel::class, 'image_id', 'id');
    }
}
