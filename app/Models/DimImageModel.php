<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DimImageModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'dim_image';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = ['client_id',
            'image',
    ];

    public function getImage()
    {
        return '';
    }
}
