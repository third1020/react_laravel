<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class SubDistrictModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'sub_district';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['name', 'district_id'];

    public function District()
    {
        return $this->hasOne(DistrictModel::class, 'district_id', 'id');
    }
}
