<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Impact;
use Faker\Generator as Faker;

$factory->define(Impact::class, function (Faker $faker) {
    return [
      'impact_name'           => $faker->jobTitle,
      'impact_value'          => mt_rand(1,4),
      'created_by'            => $faker->firstNameMale,

    ];
});
