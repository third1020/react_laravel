<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Priority;
use Faker\Generator as Faker;

$factory->define(Priority::class, function (Faker $faker) {
    return [
      'priority_name'              => $faker->firstNameMale,
      'priority_status'             => mt_rand(1,4),


    ];
});
