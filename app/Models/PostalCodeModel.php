<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class PostalCodeModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'postal_code';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['code', 'sub_district_id', 'district_id', 'province_id'];

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
