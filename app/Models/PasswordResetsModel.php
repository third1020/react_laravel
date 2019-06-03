<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class PasswordResetsModel extends Model
{
    use SoftDeletes;
    use Uuids;

    protected $table = 'password_resets';
    protected $softDelete = true;

    public $timestamps = true;

    protected $fillable = ['email', 'token'];
}
