<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class DimImageModel extends Model
{
    use SoftDeletes;


    protected $table = 'dim_image';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = [
            'client_id',
            'image',
    ];

    public function getImage()
    {
        return '';
    }
}
