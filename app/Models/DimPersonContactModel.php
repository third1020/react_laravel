<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimPersonContactModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_person_contact';
    protected $softDelete = true;

    public $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = ['client_id', 'company_id', 'person_responsible_id'];

    public function Client()
    {
        return $this->hasOne(DimUserModel::class, 'client_id', 'id');
    }

    public function FactPersonContact()
    {
        return $this->hasMan(FactPersonContactModel::class, 'id', 'person_contact_id');
    }
}
