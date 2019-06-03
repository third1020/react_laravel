<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimMessageModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_message';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'tital',
            'detail',
            'status',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }
}
