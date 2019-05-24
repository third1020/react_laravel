<?php

namespace App;

 use Illuminate\Database\Eloquent\Model;
 use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
  use SoftDeletes;

    protected $fillable = [
        'name', 'password', 'nameuser','id_card','phone_number','email','permission_id','image'
    ];

    public   $rules = [
    'name' => 'required|unique:post',
    'password' => 'required',
];


}
