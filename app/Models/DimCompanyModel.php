<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DurianSoftware\Traits\Uuids;

class DimCompanyModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_person_responsible';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'name',
            'location_id',
        ];
}
