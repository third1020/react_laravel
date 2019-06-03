<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class ProvinceModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'province';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['name'];
}
