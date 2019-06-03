<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimDepartmentModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_department';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'name',
        ];
}
