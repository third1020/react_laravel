<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class DimUserModel extends Authenticatable implements JWTSubject
{
    use SoftDeletes;
    use Uuids;
    use Notifiable;

    protected $table = 'users';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $softDelete = true;

    protected $fillable = [
          
            'client_id',
            'token',
            'password',
            'email',
            'hashed_email',
            'is_block',
            'user_right',
            'username',
            'image_show',
            'image_id',
            'permission_id',
            'deleted_at'
    ];

    protected $hidden = [
      'password',
      'remember_token'
    ];

    public function FactUser()
    {
        return $this->hasMany(FactUserModel::class, 'id', 'user_id');
    }

    public function Permission()
    {
        return $this->hasOne(PermissionModel::class, 'permission_id', 'id');
    }

    public function DimImage()
    {
        return $this->hasOne(DimImageModel::class, 'image_id', 'id');
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
