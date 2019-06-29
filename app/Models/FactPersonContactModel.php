<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class FactPersonContactModel extends Model
{
    use SoftDeletes;


    protected $table = 'fact_person_contact';
    protected $softDelete = true;

    public $timestamps = true;
    public $primaryKey = 'id';

    protected $fillable = ['client_id',
            'person_contact_id',
            'document_number',
            'first_name',
            'last_name',
            'nick_name',
            'telephone',
            'email',
            'id_card',
            'id_employee',
            'location_id',
        ];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function DimPersonContact()
    {
        return $this->hasOne(DimLocationModel::class, 'person_contact_id', 'id');
    }

    public function Location()
    {
        return $this->hasOne(DimLocationModel::class, 'location_id', 'id');
    }
}
