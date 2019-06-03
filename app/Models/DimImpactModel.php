<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimImpactModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_impact';
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
