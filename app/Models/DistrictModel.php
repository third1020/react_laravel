<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class DistrictModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'district';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['name', 'province_id'];

    public function Province()
    {
        return $this->hasOne(ProvinceModel::class, 'province_id', 'id');
    }
}
