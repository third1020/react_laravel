<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimAddressModel extends Model
{
    use SoftDeletes;


    protected $table = 'dim_address';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = [
            'province_id',
            'district_id',
            'sub_district_id',
            'postal_code_id',
    ];

    public function District()
    {
        return $this->hasOne(DistrictModel::class, 'district_id', 'id');
    }

    public function SubDistrict()
    {
        return $this->hasOne(SubDistrictModel::class, 'sub_district_id', 'id');
    }

    public function Province()
    {
        return $this->hasOne(ProvinceModel::class, 'province_id', 'id');
    }
}
