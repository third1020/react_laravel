<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimPersonResponsibleModel extends Model
{
    use SoftDeletes;
    

    protected $table = 'dim_person_responsible';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'first_name',
            'last_name',
            'nick_name',
            'telephone',
            'email',
            'position',
            'id_card',
            'id_employee',
            'location_id',
            'company_id',
            'department_id',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }
}
