<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimModifyModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_modify';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'name',
            'contact_id',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function Contact()
    {
        return $this->hasOne(DimPersonContactModel::class, 'contact_id', 'id');
    }

    public function FactModify()
    {
        return $this->hasMany(FactModifyModel::class, 'id', 'modify_id');
    }
}
