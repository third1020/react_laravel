<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class DimLocationModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_location';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['client_id',
            'name',
            'address_1',
            'address_2',
            'address_3',
            'address_latitude',
            'address_longitude',
            'address_id',
            'image_show',
            'image_id',
    ];

    public function DimAddress()
    {
        return $this->hasOne(DimAddressModel::class, 'address_id', 'id');
    }

    public function DimImage()
    {
        return $this->hasOne(DimImageModel::class, 'image_id', 'id');
    }
}
