<?php

namespace App;

 use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $fillable = [
        'name', 'password', 'nameuser','id_card','phone_number','email','permission_id','image'
    ];

    public   $rules = [
    'name' => 'required|unique:post',
    'password' => 'required',
];


}
