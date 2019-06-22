<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FactModifyModel extends Model
{
    use SoftDeletes;


    protected $table = 'fact_modify';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'modify_id',
            'comment',
            'price',
        ];

    public function DimClient()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function DimModify()
    {
        return $this->hasOne(DimModifyModel::class, 'modify_id', 'id');
    }
}
