<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimPriorityModel extends Model
{
    use SoftDeletes;
    

    protected $table = 'dim_priority';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'name',
            'value',
        ];

    public function DimClient()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }
}
