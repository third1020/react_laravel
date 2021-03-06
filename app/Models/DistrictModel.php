<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DistrictModel extends Model
{
    use SoftDeletes;
  

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
