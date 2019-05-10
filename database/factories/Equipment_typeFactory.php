<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Equipment_type;
use Faker\Generator as Faker;

$factory->define(Equipment_type::class, function (Faker $faker) {
    return [
      'type_name'              => $faker->firstNamefeMale,
      'created_by'             => $faker->firstNameMale,


    ];
});
