<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Request;
use Faker\Generator as Faker;

$factory->define(Request::class, function (Faker $faker) {
    return [
      'request_tital'              => $faker->firstNameMale,
      'request_detail'             => $faker->bs,
      'request_status'          => mt_rand(1,4),
      'equipment_id'           => mt_rand(1,50),


    ];
});
